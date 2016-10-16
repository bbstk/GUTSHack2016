package main

import (
	"encoding/json"
	"log"
	"net/http"

	"sync"

	"fmt"
	"github.com/gorilla/mux"
	"net/smtp"
	//"strconv"
)

type Employee struct {
	Id         int `json:"id"`
	TeamId     int `json:"teamid"`
	Interest   int `json:"interest"`
	Engagement int `json:"engagement"`
	Stress     int `json:"stress"`
	Relaxation int `json:"relaxation"`
	Focus      int `json:"focus"`
}

var employees = make(map[int]Employee)
var lock = sync.RWMutex{}

func SendEmail(team string) {

	auth := smtp.PlainAuth(
		"",
		"bossy.menager@gmail.com",
		"iamyourboss",
		"smtp.gmail.com",
	)

	msg := "From: bossy.menager@gmail.com\n" +
		"To: fcbdelrio@gmail.com\n" +
		"Subject: High level of stress in team: " + team +
		"! Please take action.\n\n"+
		"Visit http://localhost:8080/index.html for more information."
	// Connect to the server, authenticate, set the sender and recipient,
	// and send the email all in one step.
	err := smtp.SendMail(
		"smtp.gmail.com:587",
		auth,
		"bossy.menager@gmail.com",
		[]string{"fcbdelrio@gmail.com"},
		[]byte(msg),
	)
	if err != nil {
		fmt.Println("ne stana meila :(")
		log.Fatal(err)
	} else {
		fmt.Println("Stana mailcheto ;)")
	}
}

func AddEmployeeEndpoint(w http.ResponseWriter, req *http.Request) {

	var employee Employee
	if err := json.NewDecoder(req.Body).Decode(&employee); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	lock.Lock()
	employees[employee.Id] = employee
	lock.Unlock()
}

func GetEmployeesEndpoint(w http.ResponseWriter, req *http.Request) {
	var employeeList []Employee
	lock.RLock()
	for k := range employees {
		employeeList = append(employeeList, employees[k])
	}
	lock.RUnlock()
	json.NewEncoder(w).Encode(employeeList)
}

func CheckStressEndpoint(w http.ResponseWriter, req *http.Request) {

	w.Header().Set("Access-Control-Allow-Origin", "*")
	var teamsMetric = make([]int, 8)
	lock.RLock()
	for k := range employees {
		teamsMetric[employees[k].TeamId-1] += employees[k].Stress
	}
	lock.RUnlock()

	for index, element := range teamsMetric {
		if element/4 >= 90 {

			/////////////////////
			// SEND EMAIL MATEY
			//SendEmail(strconv.Itoa(index+1))
			//
			////////////////////
			json.NewEncoder(w).Encode(index + 1)
			return
		}
	}
	json.NewEncoder(w).Encode(0)
}

func GetSpecificTeamEndpoint(w http.ResponseWriter, req *http.Request) {

	w.Header().Set("Access-Control-Allow-Origin", "*")

	var teamsMetric = make([]int, 4)
	params := mux.Vars(req)

	var id int
	if _, err := fmt.Sscan(params["id"], &id); err == nil {
		fmt.Printf("i=%d, type: %T\n", id, id)
	}

	switch params["metric"] {
	case "interest":
		lock.RLock()
		for k := range employees {
			emp := employees[k]
			if emp.TeamId == id {
				teamsMetric[emp.TeamId*4-emp.Id] = emp.Interest
			}
		}
		lock.RUnlock()
	case "engagement":
		lock.RLock()
		for k := range employees {
			emp := employees[k]
			if emp.TeamId == id {
				teamsMetric[emp.TeamId*4-emp.Id] = emp.Engagement
			}
		}
		lock.RUnlock()
	case "stress":
		lock.RLock()
		for k := range employees {
			emp := employees[k]
			if emp.TeamId == id {
				teamsMetric[emp.TeamId*4-emp.Id] = emp.Stress
			}
		}
		lock.RUnlock()
	case "relaxation":
		lock.RLock()
		for k := range employees {
			emp := employees[k]
			if emp.TeamId == id {
				teamsMetric[emp.TeamId*4-emp.Id] = emp.Relaxation
			}
		}
		lock.RUnlock()
	case "focus":
		lock.RLock()
		for k := range employees {
			emp := employees[k]
			if emp.TeamId == id {
				teamsMetric[emp.TeamId*4-emp.Id] = emp.Focus
			}
		}
		lock.RUnlock()
	default:
		fmt.Println("default")
	}

	json.NewEncoder(w).Encode(teamsMetric)
}

func GetTeamsEndpoint(w http.ResponseWriter, req *http.Request) {

	w.Header().Set("Access-Control-Allow-Origin", "*")

	var teamsMetric = make([]int, 8)
	params := mux.Vars(req)
	switch params["metric"] {
	case "interest":
		lock.RLock()
		for k := range employees {
			teamsMetric[employees[k].TeamId-1] += employees[k].Interest
		}
		lock.RUnlock()
	case "engagement":
		lock.RLock()
		for k := range employees {
			teamsMetric[employees[k].TeamId-1] += employees[k].Engagement
		}
		lock.RUnlock()
	case "stress":
		lock.RLock()
		for k := range employees {
			teamsMetric[employees[k].TeamId-1] += employees[k].Stress
		}
		lock.RUnlock()
	case "relaxation":
		lock.RLock()
		for k := range employees {
			teamsMetric[employees[k].TeamId-1] += employees[k].Relaxation
		}
		lock.RUnlock()
	case "focus":
		lock.RLock()
		for k := range employees {
			teamsMetric[employees[k].TeamId-1] += employees[k].Focus
		}
		lock.RUnlock()
	default:
		fmt.Println("default")
	}

	for index, element := range teamsMetric {
		teamsMetric[index] = element / 4
	}
	json.NewEncoder(w).Encode(teamsMetric)
}

func GetLevelForDepartamentEndpoint(w http.ResponseWriter, req *http.Request) {
	params := mux.Vars(req)
	switch params["metric"] {
	case "interest":
		fmt.Println("interest")
		average := 0
		lock.RLock()
		for k := range employees {
			average += employees[k].Interest
		}
		average = average / len(employees)
		lock.RUnlock()
		json.NewEncoder(w).Encode([]int{10, 3, 7, 17, 25, 28, 38, 45, average})
	case "engagement":
		fmt.Println("engagement")
		average := 0
		lock.RLock()
		for k := range employees {
			average += employees[k].Engagement
		}
		average = average / len(employees)
		lock.RUnlock()
		json.NewEncoder(w).Encode([]int{10, 3, 7, 17, 25, 28, 38, 45, average})
	case "stress":
		average := 0
		lock.RLock()
		for k := range employees {
			average += employees[k].Stress
		}
		average = average / len(employees)
		lock.RUnlock()
		json.NewEncoder(w).Encode([]int{10, 3, 7, 17, 25, 28, 38, 45, average})
	case "relaxation":
		average := 0
		lock.RLock()
		for k := range employees {
			average += employees[k].Relaxation
		}
		average = average / len(employees)
		lock.RUnlock()
		json.NewEncoder(w).Encode([]int{10, 3, 7, 17, 25, 28, 38, 45, average})
	case "focus":
		average := 0
		lock.RLock()
		for k := range employees {
			average += employees[k].Focus
		}
		average = average / len(employees)
		lock.RUnlock()
		json.NewEncoder(w).Encode([]int{10, 3, 7, 17, 25, 28, 38, 45, average})
	default:
		fmt.Println("default")
	}
}

func main() {

	//SendEmail("DANI")

	router := mux.NewRouter()

	employees[1] = Employee{Id: 1, TeamId: 1, Engagement: 12, Focus: 23, Interest: 43, Relaxation: 23, Stress: 100}

	router.HandleFunc("/employee", GetEmployeesEndpoint).Methods("GET")
	router.HandleFunc("/employee/{id}", AddEmployeeEndpoint).Methods("POST")
	router.HandleFunc("/metrics/{metric}", GetLevelForDepartamentEndpoint).Methods("GET")
	router.HandleFunc("/teams/{metric}", GetTeamsEndpoint).Methods("GET")
	router.HandleFunc("/teams/{id}/{metric}", GetSpecificTeamEndpoint).Methods("GET")
	router.HandleFunc("/stress", CheckStressEndpoint).Methods("GET")

	log.Fatal(http.ListenAndServe(":12345", router))
}

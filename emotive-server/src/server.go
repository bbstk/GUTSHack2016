package main

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/gorilla/mux"
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

func AddEmployeeEndpoint(w http.ResponseWriter, req *http.Request) {

	var employee Employee
	if err := json.NewDecoder(req.Body).Decode(&employee); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	employees[employee.Id] = employee
}

func GetEmployeesEndpoint(w http.ResponseWriter, req *http.Request) {
	var employeeList []Employee
	for k := range employees {
		employeeList = append(employeeList, employees[k])
	}
	json.NewEncoder(w).Encode(employeeList)
}

func main() {
	router := mux.NewRouter()

	employees[1] = Employee{Id: 1, TeamId: 1, Engagement: 12, Focus: 23, Interest: 43, Relaxation: 23, Stress: 100}

	router.HandleFunc("/employee", GetEmployeesEndpoint).Methods("GET")
	router.HandleFunc("/employee/{id}", AddEmployeeEndpoint).Methods("POST")

	log.Fatal(http.ListenAndServe(":12345", router))
}

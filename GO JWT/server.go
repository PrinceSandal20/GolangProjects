package main

import (
	"jwt/models"
	"jwt/routes"
	"log"
	"net/http"
)

func main() {
	if err := models.InitDB(); err != nil {
		log.Fatal("Error initializing database:", err)
	}

	router := routes.SetupRuter()
	http.Handle("/", router)
	http.ListenAndServe(":8000", nil)
}

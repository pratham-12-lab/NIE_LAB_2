package main

import (
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

// Flight struct
type Flight struct {
	Id            string  `json:"id"`
	Number        string  `json:"number"`
	AirlineNumber string  `json:"airline_number"`
	Source        string  `json:"source"`
	Destination   string  `json:"destination"`
	Capacity      int     `json:"capacity"`
	Price         float32 `json:"price"`
}

// In-memory database (slice)
var flights = []Flight{
	{Id: "1", Number: "AIB123", AirlineNumber: "321", Source: "Delhi", Destination: "Bangalore", Capacity: 150, Price: 5000.00},
}

// Get all flights
func getAllFlights(c *gin.Context) {
	c.JSON(http.StatusOK, flights)
}

// Get flight by ID
func getFlightById(c *gin.Context) {
	id := c.Param("id")
	for _, flight := range flights {
		if flight.Id == id {
			c.JSON(http.StatusOK, flight)
			return
		}
	}
	c.JSON(http.StatusNotFound, gin.H{"error": "Flight not found"})
}

// Create a new flight
func createFlight(c *gin.Context) {
	var newFlight Flight
	if err := c.BindJSON(&newFlight); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid input: " + err.Error()})
		return
	}

	// Generate a unique ID
	newFlight.Id = strconv.Itoa(len(flights) + 1)

	flights = append(flights, newFlight)
	c.JSON(http.StatusCreated, gin.H{"message": "Flight created successfully", "flight": newFlight})
}

// Update flight by ID
func updateFlight(c *gin.Context) {
	id := c.Param("id")
	var updatedFlight Flight

	if err := c.BindJSON(&updatedFlight); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid input: " + err.Error()})
		return
	}

	for i, flight := range flights {
		if flight.Id == id {
			updatedFlight.Id = id // Ensure ID remains unchanged
			flights[i] = updatedFlight
			c.JSON(http.StatusOK, gin.H{"message": "Flight updated successfully", "flight": updatedFlight})
			return
		}
	}
	c.JSON(http.StatusNotFound, gin.H{"error": "Flight not found"})
}

// Delete flight by ID
func deleteFlight(c *gin.Context) {
	id := c.Param("id")
	for i, flight := range flights {
		if flight.Id == id {
			flights = append(flights[:i], flights[i+1:]...)
			c.JSON(http.StatusOK, gin.H{"message": "Flight deleted successfully"})
			return
		}
	}
	c.JSON(http.StatusNotFound, gin.H{"error": "Flight not found"})
}

func main() {
	r := gin.Default()
	r.GET("/flights", getAllFlights)
	r.GET("/flights/:id", getFlightById)
	r.POST("/flights", createFlight)
	r.PUT("/flights/:id", updateFlight)
	r.DELETE("/flights/:id", deleteFlight)

	r.Run(":8080")
}

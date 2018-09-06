package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	// "strings"
	"io/ioutil"
	"strconv"
)

func render (w http.ResponseWriter, filename string) {
	dir, err := os.Getwd()
    if err != nil {
        panic(err)
    }

    data, err := ioutil.ReadFile(dir + "/" + filename)
    if err != nil {
        panic(err)
    }

    var data_string string = string(data)
    // fmt.Println(strconv.Itoa(len(data_string)))
    w.Header().Set("Content-Length", strconv.Itoa(len(data_string)))
    fmt.Fprintf(w, data_string)
}

func handler(w http.ResponseWriter, r *http.Request) {
	render(w, "templates/index.html")
}

func main() {
	fs := http.FileServer(http.Dir("static"))
	http.Handle("/static/", http.StripPrefix("/static/", fs))

	http.HandleFunc("/", handler)
	log.Fatal(http.ListenAndServe(":8080", nil))
}
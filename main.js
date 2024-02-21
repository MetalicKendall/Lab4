(function(){
    console.log("test iife");
    const dataDisplay = document.getElementById('dataDisplay');
    const errorDisplay = document.getElementById('errorDisplay');

    function fetchData(index){
        console.log("inside of fetch data");
        return new Promise((resolve, reject) =>{
            fetch("student.json")
            .then(response =>{
                if(!response.ok){
                    throw new Error("Failed to fetch data");
                }
                return response.json()
            })
            .then(student =>{
                if(index >= 0 && index < student.length){
                    resolve(student[index]);
                }
                else{
                    reject("invalid index");
                }
            })
            .catch(error => {
                reject(error.message);
            })
        });
    }




    fetchData(2)
    .then(data =>{
        console.log("Data Fetched successfully:", data);
        dataDisplay.innerHTML=`Name: ${data.Name}, Age: ${data.Age}, Grade Level: ${data.Grade}, Major: ${data.Major}`;

    })
    .catch(error =>{
        console.error("Error Fetching Data:", error);
        errorDisplay.innerHTML = "Error Fetching Data. Please try again later.";
    })
    .finally(()=>{
        console.log("Fetched operation completed");
    })
})();
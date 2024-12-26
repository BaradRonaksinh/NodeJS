
const parseJSON = (jsonStr) => {
    try {
        const result = JSON.parse(jsonStr);
        console.log("JSON Parse successfully",result);
        return result
    } catch (error) {
        // Handle Error if parsing fail
        console.log("Error");
    }
}

const validJSON = {
    "name":"Ronak",
    "role":"IT Trainee"
};

console.log(parseJSONSafe(validJSON));
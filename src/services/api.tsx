import { Students } from "../types";
import { generatorIdFunction } from "../utils";


const mockStudents: Students[] = [{ name: 'John Doe', marks: 85, registrationId: generatorIdFunction() },
{ name: 'Jane Smith', marks: 92, registrationId: generatorIdFunction() },
{ name: 'Alice Johnson', marks: 78, registrationId: generatorIdFunction() },
{ name: 'Aniket', marks: 98, registrationId: generatorIdFunction() },
{ name: 'Vishal', marks: 70, registrationId: generatorIdFunction() },
{ name: 'Balwant rai', marks: 68, registrationId: generatorIdFunction() },
{ name: 'Vijay', marks: 58, registrationId: generatorIdFunction() }
]

export const fetchStudents:Promise<Students[]> = new Promise((resolve) => {
setTimeout(() => {
    resolve(mockStudents)
}, 1000);
})

fetchStudents.then((students) => {
console.log("Students Data Retrieved", students)
}).catch((error) => {
    console.log("Error fetching students", error )
})
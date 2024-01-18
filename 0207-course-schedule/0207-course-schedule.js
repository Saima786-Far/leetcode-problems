var canFinish = function(numCourses, prerequisites) {
    // Create an array to represent the in-degree of each course
    const inDegree = new Array(numCourses).fill(0);
    
    // Create an adjacency list to represent the prerequisites graph
    const graph = new Array(numCourses).fill(0).map(() => []);
    
    // Populate the in-degree and adjacency list
    for (const [course, prereq] of prerequisites) {
        inDegree[course]++;
        graph[prereq].push(course);
    }
    
    // Create a queue and add courses with in-degree 0 to it
    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }
    
    // Perform topological sorting
    while (queue.length > 0) {
        const currentCourse = queue.shift();
        numCourses--; // Decrement the number of remaining courses
        
        for (const nextCourse of graph[currentCourse]) {
            inDegree[nextCourse]--; // Remove the prerequisite
            if (inDegree[nextCourse] === 0) {
                queue.push(nextCourse); // Add to the queue if in-degree becomes 0
            }
        }
    }
    
    // If there are no cycles (all courses were visited), return true
    return numCourses === 0;
};

// Example usage:
const numCourses1 = 2;
const prerequisites1 = [[1, 0]];
console.log(canFinish(numCourses1, prerequisites1)); // Output: true

const numCourses2 = 2;
const prerequisites2 = [[1, 0], [0, 1]];
console.log(canFinish(numCourses2, prerequisites2)); // Output: false


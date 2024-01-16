class RandomizedSet {
    constructor() {
        this.set = new Map(); // to store values and their indices in the array
        this.arr = []; // to store values in order to achieve O(1) for getRandom
    }

    insert(val) {
        if (this.set.has(val)) {
            return false; // value already exists, insertion failed
        }

        this.set.set(val, this.arr.length);
        this.arr.push(val);
        return true; // insertion successful
    }

    remove(val) {
        if (!this.set.has(val)) {
            return false; // value doesn't exist, removal failed
        }

        const lastElement = this.arr[this.arr.length - 1];
        const indexToRemove = this.set.get(val);

        // Swap the element to be removed with the last element
        this.arr[indexToRemove] = lastElement;
        this.set.set(lastElement, indexToRemove);

        // Remove the last element and its index from the set
        this.arr.pop();
        this.set.delete(val);

        return true; // removal successful
    }

    getRandom() {
        const randomIndex = Math.floor(Math.random() * this.arr.length);
        return this.arr[randomIndex];
    }
}

// Example usage:
const randomizedSet = new RandomizedSet();
console.log(randomizedSet.insert(1)); // Output: true
console.log(randomizedSet.remove(2)); // Output: false
console.log(randomizedSet.insert(2)); // Output: true
console.log(randomizedSet.getRandom()); // Output: Either 1 or 2 randomly
console.log(randomizedSet.remove(1)); // Output: true
console.log(randomizedSet.insert(2)); // Output: false
console.log(randomizedSet.getRandom()); // Output: Always 2

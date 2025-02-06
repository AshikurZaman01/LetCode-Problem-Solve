

let counter = (value) => {

    let count = value;

    const increment = () => {
        count++;
        return count;
    }

    const decrement = () => {
        count--;
        return count;
    }

    return {
        increment, decrement
    }
}

const c = counter(10);
console.log(c.increment());
console.log(c.increment());
console.log(c.increment());
console.log(c.increment());
console.log(c.decrement());



const tupleFind = (nums, output) => {

    const productMap = new Map();
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {

            let product = nums[i] * nums[j];

            if (productMap.has(product)) {
                count += productMap.get(product);
                productMap.set(product, productMap.get(product) + 1);
            } else {
                productMap.set(product, 1);
            }

        }
    }


    return count * 8;
}

tupleFind([2, 3, 4, 6]);
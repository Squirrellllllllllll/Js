/*  
    PROMISE (sync, async)

1. Sync: Đồng bộ
    
2. Async: Bất đồng bộ
    - setTimeout, setInterval, fetch, XMLhttpRequest, reading file, request animation frame
    - Dùng callback để xử lý bất đồng bộ

3. Pain
    a. Sync
        - Callback hell: callback lồng callback
        - Pyramid of doom
*/

// 4. Promise (concept)
/*
    - Để xử lý bất đồng bộ

    - B1: new Promise (là 1 constructor)
    - B2: Executor
    - B3: Có 3 trạng thái:
            + Pending: Chờ xem thành công hay thất bại
            + Fulfilled: Trạng thaasi khi thành công
            + Rejected: Trạng thái khi thất bại
*/
let promise = new Promise(
    // Executor
    function (resolve, reject) {
        // Logic
        // Resolve(Thành công)
        // Reject(Thất bại)

        // fake call API
        resolve([
            {
                id: 1,
                name: "javascript"
            }
        ]); // Lọt vào then
        reject("Error"); // Lọt vào catch
    }
);

promise
    .then(function () {
        // Sau khi resolve
        console.log("Successfully!")
    })
    .catch(function () {
        // Khi bị reject
        console.log("Failure!")
    })
    .finally(function () {
        // Sau khi thực hiện promise
        console.log("Done!")
    });


/* 5. Promise (chain)
    - Có thể có nhiều .then, .catch
    - Kết quả trả về của function trước là tham số truyền vào của function sau nếu không phải là 1 promise
    - Nếu là promise, nó sẽ lấy đối tượng promise của function trc làm tham số truyền vào


*/

promise
    .then(function () {
        return new Promise(
            function (resolve) {
                setTimeout(function () {
                    resolve([1, 2, 3])
                }, 3000);
            })
    })
    .then(function (data) {
        console.log(data)
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
        console.log("Done!")
    })

// Ví dụ
function sleep(ms) {
    return new Promise2((resolve) => {
            setTimeout(resolve, ms)
        })
}
    
sleep(1000)
    .then(function () {
        console.log(1);
        return sleep(1000);
    })
    .then(function () {
        console.log(2);
        return sleep(1000);
    })
    .then(function () {
        console.log(3);
        return sleep(1000);
    })
    .then(function () {
        console.log(4);
        return sleep(1000);
    })

    // ví dụ về callback hell và cách khắc phục
function hell(value, cb) {
    cb(value);
}

// Không sử dụng Promise dẫn đến tạo ra callback hell 
hell(1, function (valueFromA) {
    hell(valueFromA + 1, function (valueFromB) {
        hell(valueFromB + 1, function (valueFromC) {
            hell(valueFromC + 1, function (valueFromD) {
                console.log(valueFromD + 1);
            });
        });
    });
});

// Sử dụng Promise sẽ tạo ra đoạn code dễ đọc hơn và vẫn đảm bảo đúng logic
function notHell(value) {
    return new Promise(function (resolve) {
        resolve(value);
    });
}

notHell(1)
    .then(function (value) {
        return value + 1;
    })
    .then(function (value) {
        return value + 1;
    })
    .then(function (value) {
        return value + 1;
    })
    .then(function (value) {
        console.log(value + 1);
    });
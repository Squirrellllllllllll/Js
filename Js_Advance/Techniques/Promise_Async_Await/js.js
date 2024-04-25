// Callback - Example
const verifyUser = function (username, password, callback) {
    dataBase.verifyUser(username, password, (error, userinfo) => {
        if (error) {
            callback(error)
        } else {
            dataBase.getRoles(username, (error, roles) => {
                if (error) {
                    callback(error)
                } else {
                    dataBase.logAccess(username, (error) => {
                        if (error) {
                            callback(error)
                        } else {
                            callback(null, userinfo, roles)
                        }
                    })
                }
            })
        }
    })
}


// Promise
const verifyUserP = function (username, password) {
    database.verifyUserP(username, password)
        .then(userInfo => dataBase.getRoles(userInfo))
        .then(rolesInfo => dataBase.logAccess(rolesInfo))
        .then(finalResult => {
            // coding...
        })
        .catch((error) => {
        // coding...
    })
}


// Async/Await
const verifyUserA = async function (username, password) {
    try {
        const userInfo = await dataBase.verifyUser(username, password)
        const rolesInfo = await dataBase.getRoles(userInfo)
        const logStatus = await dataBase.logAccess(userInfo)
        return userInfo
    } catch (error) {
        // coding...
    }
}
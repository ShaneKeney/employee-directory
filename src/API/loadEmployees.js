
const loadEmployees = async () => {
    const response = await fetch(
        'https://randomuser.me/api/?nat=us&results=200',
        {
            method: 'GET'
        }
    )

    let resData = await response.json();

    return resData
}

export default loadEmployees;
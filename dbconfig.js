
//const PORT = process.env.PORT || 8080

    // config DB
    const config = {
        user: 'sa',         // Thay thông tin đăng nhập của tài khoản 
        password: 'sa', // Password
        server: 'DESKTOP-O376U6P',    // Ở đây mình đặt DB trên localhost
        database: 'Tour',    // Chổ này thay bằng DB name 
        options: {
            enableArithAbort: true,
            encrypt: true
        }
    };
// connect database
//var server = app.listen(PORT, () => console.log(`Server is starting at port ${PORT}`));
module.exports = config;
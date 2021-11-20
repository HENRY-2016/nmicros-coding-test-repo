

The Savings Applicatioin has 2 parts namely;
    1). Back-end implemented in php7.0 running on apache2.0 server
    2). Front-end implemented in Reactjs with
            > react-bootstrap
            > jsx


Back-end
    It's folder is named as php-coding-test
    php-coding-test
        database folder ::: Holds sqlite database file
        Controller.php  ::: Controls the Views and Model
        Model.php  :::      Holds the database file and all function defination
        Views.php  :::      Handles all the routes from the client side


Front-end 
    It's folder is named as react-coding-test
    react-coding-test
        node_module :: lefted out becouse it was to big to be uploaded to github
        public
        src
            Components ::: Holds all application user interface files
            App.js ::: Applicatioin defination
            index.js ::: Applicatioin entry point
    
url endpoint setting
    In the front-end are in localhost
        eg ::: 
        http://localhost/php-coding-test/Views.php/DeleteViewSavingsController

    php-coding-test 
        dir should be in ( /var/www/html ) dir
            eg  /var/www/html/php-coding-test


Development env
    Developed on Linux ubuntu 16.04 OS
    Vs code tool



Thank You For Reading Me
    Kamoga Henry

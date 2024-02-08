# ApiDocEtReadMe

![Logo](./img/Logo.png)

## Description
Application allowing CRUD operations on an alcohol database.

## Install database
    # Installing the "Alcool" Database

This guide will assist you in installing the "Alcool" database from the provided SQL file, `alcool.sql`.

## Prerequisites

Before getting started, make sure you have the following:

- [MySQL](https://www.mysql.com/) installed on your system.
- Sufficient privileges to create a new database or import data into an existing database.
- The `alcool.sql` file containing the SQL dump of the "Alcohol" database.

## Installation Instructions

Follow these steps to install the "Alcool" database:

1. **Create a New Database (Optional):** If you haven't already created the database where you want to import the data, you can do so using the following command:

    ```sql
    CREATE DATABASE alcool;
    ```

    Replace `alcool` with the desired name of your database.

2. **Connect to MySQL:** Use the MySQL client to connect to your MySQL server using your username and password.

    ```bash
    mysql -u YOUR_USER -p
    ```

3. **Select the Target Database:** If you created a new database, select it using the following command:

    ```sql
    USE alcool;
    ```

    Make sure to replace `alcool` with the name of the database you created.

4. **Import the SQL Dump:** Execute the following command to import the data from the `alcool.sql` file:

    ```bash
    mysql -u YOUR_USER -p alcool < path_to_alcool.sql
    ```

    Replace `path_to_alcool.sql` with the absolute or relative path to the `alcool.sql` file.

5. **Verify the Installation:** Once the import is complete, you can verify that the "Alcool" database has been successfully installed by examining the tables and imported data.


## Installation

To install the API, you need to have Node.js installed on your computer. If you don't have it, you can download it from the official website: https://nodejs.org/en/

After installing Node.js, you can clone the repository to your computer and go to the usage section.

## Usage

To use the API, you need to run the start.bat file. This will install the necessary dependencies if needed and start the server.
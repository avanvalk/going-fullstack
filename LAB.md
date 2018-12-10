First Fullstack App
===

## Code Kata

Complete [today's Kata](https://www.codewars.com/kata/disemvowel-trolls)

## Lab

Create your first app and server (fullstack minus database)!

Pick an "entity" (resource) for your app. Ideally, something of interest to you.
**However**, your resource should:

1. Only have one level of properties (no nested objects or arrays)
1. Have properties with at least one of each type:
    * string/text
    * number
    * boolean (true/false)

## Project

Your github project needs to contain both an `app` folder and a `server` folder:

* `app` contains your vue front end project
* `server` contains your data api express server

These will need separate setup and configuration: `package.json`, `.gitignore`, `.eslintrc`, `README.md`

## App

The app needs to display a list of resources and have an add form to add a new resource. Make sure to:

* Update the list after adding a new item
* Clear the add form after successful save

Setup Vue Router, even if only one page

## Server

The server needs to:

* Use `express.json()` to "read" POST body
* Use `cors()` to handle direct request from app
* Create a `.json` file with initial data for the app
* Handle a `GET` to `/api/<your-resource-plural>` and return list of data
* Handle a `POST` to `/api/<your-resource-plural>` and update file then return the posted object

## BONUS

Add a detail get by id:

* Add a new page to your vue app that has an id property
* Fetch that resource when loading the page 
* Handle a `GET` to `/api/<your-resource-plural>/:id` and return specific item from data

## Rubric

* app
    * get and list display **2pts**
    * add form, post, and UI update **3pts**
    
* server
    * setup **2pts**
    * `GET` and `POST` routes **3pts**

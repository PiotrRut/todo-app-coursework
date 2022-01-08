# IN3046: Cloud Computing Coursework :cloud_with_lightning:

This repo contains the source code for the client implementation of the to-do app for my team's Cloud Computing coursework.

The front end stack is React with Next.js. The back end is .NET based and available at [Reeceeboii/IN3046-Backend](https://github.com/Reeceeboii/IN3046-Backend) :globe_with_meridians:

All of the components and UI elements, including typography components, inputs and more, are created internally with performance and accessibility in focus - some components, such as the generic `Dialog`, use [Radix's](https://www.radix-ui.com) primitives to base their bare root functionality off of. Those components are marked as such.

## App overview :calling:

This project is a simple to-do app, which allows users to create todo tasks, as well as tags (hashtags) which can be bound to a task.

Users are able to create, delete and edit both tasks and tags, as well as filter their list of tasks by a tag and/or their status (completed/not completed).

## Getting Started :horse_racing:

After cloning to your machine, you can run `yarn` to install all necessary dependencies. After successfully installing dependencies, run `yarn dev` to start the development server, which will start up on http://localhost:3000.

## Generating components & pages :seedling:

To make sure the code stays consistent and structured, always use the provided generators when creating new components and pages. The commands to do that are :point_down:

```bash

# For new component
$ yarn new:component

# For new page
$ yarn new:page
```

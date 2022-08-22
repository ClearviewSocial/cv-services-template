# cv-services-template

## Overview

This repository is meant to exist as the base template for generating new services to be composed in the Clearview Social SOA infrastructure.

**Important!** To ensure this repo works with the `serverless` command, this repo is public (can be access via serverless their commands to fetch the template).

## Creating a new service

### Create the repo

* Create the repo in the ClearviewSocial org. This should be done by someone with Admin access so they can set repo permissions appropriately.

### Create the service

* Services should follow the naming convention of `cv-services-<resource>` ... e.g. `cv-services-orgs`, `cv-services-users`
* Run the following command to create a new service:

```bash
serverless --template-url=https://github.com/ClearviewSocial/cv-services-template
```

* When asked "What do you want to call this project?" use the `cv-services-<resource>` format above
* When asked "Do you want to deploy now?" choose "No"

### Connect the service to the repo

* cd into the service just created
* Run the following command to initialize a git repo:

```bash
git init
```

* Run the following commands to connect this repo to the origin created in Step 1 "Create the repo" (**Note:** The `cv-services-<resource>` should match whatever service name was created in Step 2, and whatever repo name was created in Step 1 - these should always match!)

```bash
git remote add origin git@github.com:ClearviewSocial/cv-services-<resource>.git
git fetch origin
git reset --hard origin/master
git branch --set-upstream-to=origin/master master
```

### Install service dependencies

* Run the following to install the service dependencies:

```bash
npm ci
```

----

Once completed, you may customize your service using the `serverless.yml` file installed, and add additional dependencies as required.

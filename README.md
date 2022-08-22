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

* 

# Landing Page React Front End 

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React CI](https://github.com/sail-black/landing-front/actions/workflows/cd.yml/badge.svg)](https://github.com/sail-black/landing-front/actions/workflows/cd.yml)

This is the front end for the landing page with postgreSQL and Flask backend. 

## Prepare 
On Ubuntu run 
```
sudo apt install nodejs npm
```
## How to use 

```
bash init.sh
```
When prompted first enter 
`rjslp`
Then select `react`
Follow along then edit `tailwind.config.js`

Moreover setup a `env.jsx` file and add the link to your API here 
```
const api_link= "yourlinkgoeshere";
export default api_link;
```
## Host the website

You will have to edit your DNS records. Can't give any tutorial for your domain as it would be different for every provider, but you will figure it out by yourself.

## Development server

```
npm run dev
```

## Production server 
```
npm run build 
npm run preview
```
On the deployment server run 
```
npm run preview

```
Also, for AWS edit `vite.config.js` and add:
```
  preview: {port: 8080}
```

# Issues with multipage 

Consult vite documentation on how to set it up. It should not be entirely different from the standard React thing. 
# HCI My Three

This website was written by Adam Pegman, Mark Dunne and Dean Laylor for DCU's Human Computer Interaction Module. 
The assignment was to produce an easier to use, more mobile-friendly and more accessible (correct aria tags and semantic html)
version of a commonly used website, and we chose the "My Three" phone topup service.

# Screenshots

![Screenshot 1](/../master/screenshots/screenshot_1.png)

![Screenshot 2](/../master/screenshots/screenshot_2.png)

![Screenshot 3](/../master/screenshots/screenshot_3.png)

![Screenshot 4](/../master/screenshots/screenshot_mobile.png)

# Github Pages
http://amp180.github.io/2017_HCI_Three_Site

# Notes

We used yomann and `generator-fountain-webapp` to set up a build with gulp, webpack, sass, angular, typescript and chai tests.
Unfortunately I forgot to run `npm shrinkwrap --dev` and many of the packages have since had breaking changes or been depracated.

I've rewritten the build in just webpack, and updated it to angular 7, but unfortunately I didn't have time to get the chai tests running again. The older build environment is in the git log, so I might go back and fix it at some point.

## To build

```
npm install
npm build
```

or just get the built version from the dist folder. 

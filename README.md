# Jekyll Netlify Boilerplate

**A really simple Jekyll template for creating a fast, static website on Netlify with
a continuous deployment workflow.**

### This project is featured on Netlify's official [template showcase](http://templates.netlify.com/template/jekyll-with-netlify-cms-boilerplate/) and blog: [The top 10 Static Site Generators to watch in 2018](http://templates.netlify.com/template/jekyll-with-netlify-cms-boilerplate/)

* Minimal styling, ready to make your own
* Example blog posts, pages and contact form
* Responsive CSS Grid layout with fallbacks for older browsers
* Continuous Deployment workflow via Netlify and Github
* Netlify CMS for managing content
* Netlify Identity for authenticating users
* Netlify Forms for processing your static HTML forms with reCAPTCHA
* Optional Netlify `_redirects` and `_headers` files ready to use
* Jekyll SASS pipeline
* Minified HTML and CSS

Based on Netlify's [Jekyll + Netlify CMS](https://github.com/netlify-templates/jekyll-netlify-cms) starter template, head over there for more details on deployment and build settings or to get help with setting up Netlify.

For help with templates, local development and other Jekyll related stuff, check out the excellent [Jekyll Docs](https://jekyllrb.com/docs/home/).

## [View Demo](https://jekyll-netlify-boilerplate.netlify.com/)

## Performance

You can test the demo site's TTFB (Time To First Byte) at [testmysite.io](https://testmysite.io/5b50abe51f12b74b81dd5442/jekyll-netlify-boilerplate.netlify.com)

## Getting started

Simply click the deploy button to get your own copy of the repository deployed to Netlify:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/danurbanowicz/jekyll-netlify-boilerplate&stack=cms)

This will setup everything needed for running the CMS:

* A new repository in your GitHub account with the code
* Full Continuous Deployment to Netlify's global CDN network
* Control users and access with Netlify Identity
* Manage content with Netlify CMS

The email address associated with your Netlify account will receive an email inviting you as an
Identity user - click Accept in the email to set your new password, then navigate to `/admin` on
your site to log in.

Now you're all set, and you can start editing content!

**Note:** if you switch the repo that was created to private, you'll need to regenerate your token,
as the token generated using the deploy to Netlify button can only access public repositories. To
regenerate your token, head to "Settings" in your Netlify site dashboard, go to the "Identity"
section, then scroll to "Services" where you'll see an "Edit settings" button. Click that and you'll
see a text link to "Generate access token in GitHub".

## Local Development

Clone this repository and run:

```bash
bundle install
bundle exec jekyll server --watch
```
Jekyll will watch your project folder for changes.

Now navigate to [localhost:4000](http://localhost:4000/) to preview the site, and
[localhost:4000/admin](http://localhost:4000/admin) to log into the CMS.

## Bug reports, feature requests, etc

This is an ongoing project and I welcome any feedback, suggestions or contributions.

Please use the issue tracker to let me know about any bugs or feature requests, or alternatively make a pull request.

If you need any help with setting up Netlify CMS, you can reach out to the Netlify team in the [Netlify CMS Gitter](https://gitter.im/netlify/netlifycms).

# Jekyll Netlify Boilerplate

*Note: Check out my [Eleventy Netlify Boilerplate](https://github.com/danurbanowicz/eleventy-netlify-boilerplate). It does pretty much the same as this project but uses the [Eleventy](https://www.11ty.io/) static site generator. It's fast, flexible and doesn't require Ruby.*

**A really simple Jekyll template for creating a fast, static website on Netlify with
a continuous deployment workflow.**

🔥 **This project is featured on Netlify's official [template showcase](http://templates.netlify.com/template/jekyll-with-netlify-cms-boilerplate/) and blog: [The top 10 Static Site Generators to watch in 2018](http://templates.netlify.com/template/jekyll-with-netlify-cms-boilerplate/)** 🔥

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

### Setup authentication

After deploying this project, Netlify Identity will add you as a CMS user and
will email you an invite. It is not necessary to accept this invite if you wish
to use an
[OAuth provider](https://www.netlify.com/docs/identity/#external-provider-login)
(e.g. Github) to manage authentication for your CMS.
It is recommended to use this method of authentication as it removes the need
for an email & password to log in to the CMS and is generally more secure. You
will need to add an OAuth provider in your Netlify app settings under
"Settings" > "Identity" > "External providers".

Next, navigate to `/admin` on your site, choose your OAuth provider from the
login box and you should then be logged into your CMS.

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

In case you don't want to install ruby-bundler you can use docker:

```bash
docker-compose up
```

Jekyll will watch your project folder for changes.

Now navigate to [localhost:4000](http://localhost:4000/) to preview the site, and
[localhost:4000/admin](http://localhost:4000/admin) to log into the CMS.

## Bug reports, feature requests, etc

This is an ongoing project and I welcome contributions. Feel free to submit a PR.

If you need any help with setting up Netlify CMS, you can reach out to the Netlify team in the [Netlify CMS Gitter](https://gitter.im/netlify/netlifycms).

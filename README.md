# SSVM 2027 Website

Based on [al-folio](https://github.com/alshedivat/al-folio).

## Structure

Import directories and files:

- `_pages` The pages of the site.
  - `_pages/about.md` Main landing page, including news items.
  - `_pages/important-dates.md`
  - `_pages/schedule.md`
  - `_pages/submission.md`
  - `_pages/registration.md`
  - `_pages/venue.md`
  - `_pages/people.md` Organizing & program committee.
  - `_pages/previous-editions.md`
- `assets/img` Add images here and refer to them with `{{ site.baseurl }}/assets/img/some_file.png`.
- `_news` Each `.md` file will in this directory will create a news item on the mai page.

## Deployment

The website automatically deploys to [ssvm2027.github.io](https://ssvm2027.github.io) on commits to the `main` branch, so don't push changes to `main` until you want them to go public.

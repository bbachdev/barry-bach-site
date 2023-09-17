# barry-bach-site

## Summary
This project was creating a static marketing + portfolio page, which is currently accessible at https://barrybach.com .

## Tech Stack
![Icons for TypeScript](https://skillicons.dev/icons?i=ts,react,vite,tailwind)

- **React + TypeScript** - While this project primarily hosts static information, there are some interactive portions of the site (namely, the "AudioPlayer" component). React, through *useState* and reusable components, made creation of these more dynamic sesctions very simple.
- **Vite** - Due to the lack of need for more complex features that frameworks like Next provides, and the desire to have a stsatic site for easy + cheap uploading, I opted to use Vite for this particular project.
- **TailwindCSS** - Having traditionally used regular CSS stylesheets for projects, this was my first project utilizing Tailwind. Initially it felt like a step-back, but eventually the benefits of using it became clear (e.g. maximum control, "enforced" standards, mobile-first styling).

## AudioPlayer
One of my main goals in developing this project was creating an HTML audio player that combined all features that I typically see missing from similar voice artist pages, namely:
- Styling that is consistent across all browsers (vs. typical audio tag styling)
- Volume adjustment + mute functionality
- Awareness of other audio sources (and pausing when not the "active" audio)
- Ability for user to download audio, regardless of browser/device

By not relying on an embedded source (e.g. Soundcloud), I can have full control of the functionality and styling of my audio players, resulting in a more cohesive feel overall./
Various quality-of-life choices were also made when creating this component. Things like unmuting "remebering" your previous volume level, and listeners/handlers for certain lifecycle events help add that little extra bit of polish to the component.

## Additional Info
Icons provided by MaterialUI ( https://mui.com/material-ui/material-icons/ )
  

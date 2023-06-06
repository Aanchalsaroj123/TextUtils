import React from 'react'

export default function About() {
  return (
   <>
   <div className="container">
   <nav id="navbar-example2" className="navbar bg-body-tertiary px-3 mb-3">
  <a className="navbar-brand" href="/"><h1>About Us</h1></a>
  <ul className="nav nav-pills">
    <li className="nav-item">
      <a className="nav-link" href="#scrollspyHeading1">First</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#scrollspyHeading2">Second</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#scrollspyHeading3">Third</a>
    </li>
  </ul>
</nav>
<div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example bg-body-tertiary p-3 rounded-2" tabindex="0">
  <h4 id="scrollspyHeading1">First heading</h4>
  <p> This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
  <h4 id="scrollspyHeading2">Second heading</h4>
  <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
  <h4 id="scrollspyHeading3">Third heading</h4>
  <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
</div>
</div>
   </>
  )
}

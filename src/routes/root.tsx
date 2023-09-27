export default function Root() {
  return (
    <>
        <nav>
          <ul>
            <li>
              <a href={`/cart`}>shopping cart</a>
            </li>
            <li>
              <a href={`/information`}>information</a>
            </li>
            <li>
              <a href={`/summary`}>summary</a>
            </li>
            <li>
              <a href={`/confirmation`}>confirmation</a>
            </li>
          </ul>
        </nav>
      <div id="detail"></div>
    </>
  );
}

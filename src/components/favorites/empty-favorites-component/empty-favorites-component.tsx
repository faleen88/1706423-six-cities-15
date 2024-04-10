const variantsEmptyText = {
  empty: {text: 'Nothing yet saved.'},
  error: {text: 'Failed to load favorite offers.'},
};

type EmptyFavoritesComponentProps = {
  type: keyof typeof variantsEmptyText;
}

const EmptyFavoritesComponent = ({type}: EmptyFavoritesComponentProps): JSX.Element => (
  <main className="page__main page__main--favorites page__main--favorites-empty">
    <div className="page__favorites-container container">
      <section className="favorites favorites--empty">
        <h1 className="visually-hidden">Favorites (empty)</h1>
        <div className="favorites__status-wrapper">
          <b className="favorites__status">{variantsEmptyText[type].text}</b>
          {type === 'empty' &&
            <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>}
        </div>
      </section>
    </div>
  </main>
);

export default EmptyFavoritesComponent;

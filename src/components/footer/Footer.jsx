import dataBiz from '../../images/client-databiz.svg';
import audioPhine from '../../images/client-audiophile.svg';
import meet from '../../images/client-meet.svg';
import maker from '../../images/client-maker.svg';
import './_footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <img src={dataBiz} width="80" alt="databiz" />
      <img src={audioPhine} width="80" alt="audio phine" />
      <img src={meet} width="80" alt="meet" />
      <img src={maker} width="80" alt="maker" />
    </footer>
  );
};

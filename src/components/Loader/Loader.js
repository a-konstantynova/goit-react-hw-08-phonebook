import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './Loader.module.css';

export default function Spinner() {
  return (
    <div className={s.loader}>
      <Loader
        type="ThreeDots"
        color="#5a7ffa"
        height={80}
        width={80}
        timeout={2000} //3 secs
      />
    </div>
  );
}

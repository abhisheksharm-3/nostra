/* eslint-disable react/prop-types */
import {images} from '../../constants'

const SubHeading = (props) => (
  <div className='mb-4'>
    <p className="font-serif text-white font-bold tracking-[0.04em] uppercase leading-[30px] text-[19px] sm:text-[21px] 2xl:text-[37px] 2xl:leading-[67px]">{props.title}</p>
    <img src={images.spoon} alt='spoon image' />
  </div>
);

export default SubHeading;

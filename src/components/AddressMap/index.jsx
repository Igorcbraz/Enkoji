import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useMap } from '../../context/MapContext';

export const AddressMap = ({ className = 'w-full h-full' }) => {
  const { mapIframe, setMapIframe } = useMap();

  useEffect(() => {
    if (!mapIframe) {
      const iframe = (
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.0478203500575!2d-46.86826018509086!3d-23.745674074309456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cfb27e5a744885%3A0x333b13f0aa6db8b5!2sTemplo%20Enkoji!5e0!3m2!1spt-BR!2sbr!4v1672166189508!5m2!1spt-BR!2sbr'
          className={className}
          style={{ border: 0 }}
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        />
      );
      setMapIframe(iframe);
    }
  }, [mapIframe, setMapIframe, className]);

  return mapIframe;
};

AddressMap.propTypes = {
  className: PropTypes.string,
};

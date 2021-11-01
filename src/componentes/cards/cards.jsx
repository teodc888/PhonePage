import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import "./cards.css"
import Buscador from '../buscador/buscador';

export default function Cards() {
  const phones = useSelector((state) => state.phones );
  return (
    <>
      <Buscador/>
        {
          phones.length &&
          phones.map((phone) =>{
              return(
                  <>
                    <Link to={`/phone/${phone.brand_slug}`}>
                      <ListItem className="prueba"  component="div" disablePadding key={phone.id}>
                        <ListItemButton>
                            <ListItemText className="prueba1">{phone.brand_name}</ListItemText>
                        </ListItemButton>
                      </ListItem>
                    </Link>
                  </>
                      
              )
          })
      }
    </>
    
  );
}
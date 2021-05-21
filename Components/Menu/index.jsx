import React, { useContext } from "react";
import Link from "next/link";
import { DataContext } from "../../context";
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
} from "carbon-components-react/lib/components/UIShell";
import Add from '../Add'

const MenuBar = () => {
  const { globalData,setGlobalData } = useContext(DataContext);

  const onModal =()=>{
    setGlobalData({
      ...globalData,
      modal:{
        title:"Agregar Nota",
        children:<Add/>,
        open:true
      }
    })
  }

  return (
    <div className="container">
      <Header aria-label="Notas APP">
        <Link href="/">
          <HeaderName prefix="Notas">App</HeaderName>
        </Link>
        <HeaderNavigation aria-label="IBM [Platform]">
          {!globalData.user ? (
            <>
              <HeaderMenuItem>
                <Link href="/login"><a>Login</a></Link>
              </HeaderMenuItem>
              <HeaderMenuItem>
                <Link href="/registro"><a>Registro</a></Link>
              </HeaderMenuItem>
            </>
          ) : (
            <>
                <HeaderMenuItem onClick={onModal}>
                  Add
                </HeaderMenuItem>
                <HeaderMenuItem>
                <Link href="/home2"><a>Registro</a></Link>
              </HeaderMenuItem>
            </>
          )}
        </HeaderNavigation>
      </Header>
    </div>
  );
};

export default MenuBar;

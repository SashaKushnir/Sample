import React, {useState} from 'react'
import {ProductCategoriesMyItem} from "./DishItem/ProductCategoriesMyItem";
import {MenuItem} from "../../../../redux/newBanknote/newBanknoteReducer";
import styles from './MenuItemComponent.module.css'
import {FullscreenExitOutlined, FullscreenOutlined} from "@ant-design/icons";
import {ProductCategoriesMyItemBasket} from "./DishItem/ProductCategoriesMyItemBasket";

interface MenuItemComponentProps {
    Menuitem: MenuItem
    showAmount?: boolean
}

export const MenuItemComponent: React.FC<MenuItemComponentProps> = ({Menuitem, showAmount}) => {
    let [hide, setHide] = useState(false)
    let product_categoriesItems = Menuitem.products.map((obj, index) =>
        <ProductCategoriesMyItem key={index} keyVal={index}
                                 showAmount={showAmount} product_categoriesItem={obj}/>)
    let product_categoriesItemsBasket = Menuitem.products.map((obj, index) =>
        <ProductCategoriesMyItemBasket key={index} keyVal={index}
                                 showAmount={showAmount} product_categoriesItem={obj}/>)
    const showMenuItem = Menuitem.products.some((obj) => obj.showAmount)
    return <div>
        {!showAmount && <div className={styles.item}>
            <div className={styles.title}>
                <div className={styles.name}>
                    {Menuitem.name}
                    {Menuitem.type}
                </div>
                <div className={styles.hide}>
                    <label>{!hide ?
                        <FullscreenExitOutlined twoToneColor="726764" rotate={45} onClick={() => setHide(!hide)}/>
                        :
                        <FullscreenOutlined twoToneColor="726764" rotate={45} onClick={() => setHide(!hide)}/>}</label>
                </div>
            </div>
            {/*<div>*/}
            {/*    {Menuitem.menu_category.description}*/}
            {/*</div>*/}
            {!hide && <div className={styles.all_menu}>
                {product_categoriesItems}
            </div>}
        </div>}
        {showAmount && showMenuItem && <div>
            <div className={styles.name_basket}>
                {Menuitem.name}
            </div>
            <div className={styles.hide}>
                <label>{!hide ?
                    <FullscreenExitOutlined twoToneColor="726764" rotate={45} onClick={() => setHide(!hide)}/>
                    : <FullscreenOutlined twoToneColor="726764" rotate={45} onClick={() => setHide(!hide)}/>}</label>
            </div>
            {/*<div>*/}
            {/*    {Menuitem.menu_category.description}*/}
            {/*</div>*/}
            {!hide && <div>
                {product_categoriesItemsBasket}
            </div>}
        </div>
        }
    </div>
}

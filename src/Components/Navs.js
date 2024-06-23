import React from 'react';
import { Outlet } from 'react-router-dom';

export function New() {
    return (
        <div>
            <p>New page</p>
            <Outlet /> {/* Это необходимо для рендеринга вложенных маршрутов */}
        </div>
    );
}

export function Stock() {
    return (
        <div>
            <p>Stock page</p>
        </div>
    );
}

export function GoodsInStock() {
    return (
        <div>
            <p>Goods in Stock page</p>
        </div>
    );
}

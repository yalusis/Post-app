import React from "react";
import { HeaderButton } from 'react-navigation-header-buttons';
import {Ionicons} from '@expo/vector-icons';

export const AppHeaderIcon = props => (
<HeaderButton {...props}
iconSize={24}
IconComponent={Ionicons}
color={'#fff'}/>
)
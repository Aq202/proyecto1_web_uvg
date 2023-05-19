import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
import ReactDOMServer from 'react-dom/server';
import PropTypes from 'prop-types';
import moment from 'moment';

const animated = '_animated_1do3h_1';
const container = '_container_10ptw_1';
const navButton = '_navButton_10ptw_12';
const title$1 = '_title_10ptw_32';
const styles$p = {
  container,
  navButton,
  title: title$1,
};
function NavbarButton({
  children,
  subMenu,
  title: title2,
  className,
  onClick,
  containerClass,
  refProp,
}) {
  return /* @__PURE__ */ jsxs('div', {
    className: `${styles$p.container} ${containerClass}`,
    ref: refProp,
    children: [
      /* @__PURE__ */ jsx('button', {
        className: `${styles$p.navButton} ${animated} ${className}`,
        type: 'button',
        onClick,
        children,
      }),
      title2 && /* @__PURE__ */ jsx('span', { className: styles$p.title, children: title2 }),
      subMenu,
    ],
  });
}
NavbarButton.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  containerClass: PropTypes.string,
  subMenu: PropTypes.node,
  // eslint-disable-next-line react/forbid-prop-types
  refProp: PropTypes.any,
};
NavbarButton.defaultProps = {
  title: null,
  className: '',
  onClick: null,
  containerClass: '',
  subMenu: null,
  refProp: null,
};
function MenuButton({ onClick }) {
  return /* @__PURE__ */ jsx(NavbarButton, {
    onClick,
    children: /* @__PURE__ */ jsx('svg', {
      viewBox: '0 0 24 24',
      xmlns: 'http://www.w3.org/2000/svg',
      children: /* @__PURE__ */ jsx('g', {
        children: /* @__PURE__ */ jsx('path', {
          d: 'M21,6H3V5h18V6z M21,11H3v1h18V11z M21,17H3v1h18V17z',
        }),
      }),
    }),
  });
}
MenuButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
const logo = '_logo_1l5mp_1';
const logoContainer = '_logoContainer_1l5mp_7';
const country = '_country_1l5mp_13';
const styles$o = {
  logo,
  logoContainer,
  country,
};
function YoutubeLogo() {
  return /* @__PURE__ */ jsxs('a', {
    href: '/',
    className: styles$o.logoContainer,
    children: [
      /* @__PURE__ */ jsx('svg', {
        className: styles$o.logo,
        display: 'block',
        pointerEvents: 'none',
        focusable: 'false',
        viewBox: '0 0 90 20',
        xmlns: 'http://www.w3.org/2000/svg',
        children: /* @__PURE__ */ jsxs('g', {
          className: 'style-scope yt-icon',
          preserveAspectRatio: 'xMidYMid meet',
          children: [
            /* @__PURE__ */ jsxs('g', {
              className: 'style-scope yt-icon',
              children: [
                /* @__PURE__ */ jsx('path', {
                  className: 'style-scope yt-icon',
                  d: 'm27.973 3.1232c-0.3292-1.23-1.2959-2.1966-2.5259-2.5259-2.2271-0.59737-11.162-0.59737-11.162-0.59737s-8.9346 2.2429e-7 -11.162 0.59737c-1.23 0.32926-2.1966 1.2959-2.5259 2.5259-0.59737 2.2272-0.59737 6.8768-0.59737 6.8768s2.2429e-7 4.6496 0.59737 6.8768c0.32926 1.23 1.2959 2.1966 2.5259 2.5258 2.2272 0.5974 11.162 0.5974 11.162 0.5974s8.9347 0 11.162-0.5974c1.23-0.3292 2.1967-1.2958 2.5259-2.5258 0.5974-2.2272 0.5974-6.8768 0.5974-6.8768s-0.0024-4.6496-0.5974-6.8768z',
                  fill: '#f00',
                }),
                /* @__PURE__ */ jsx('path', {
                  className: 'style-scope yt-icon',
                  d: 'm11.425 14.285 7.4224-4.285-7.4224-4.2851v8.5701z',
                  fill: '#fff',
                }),
              ],
            }),
            /* @__PURE__ */ jsx('g', {
              className: 'style-scope yt-icon',
              children: /* @__PURE__ */ jsxs('g', {
                className: 'style-scope yt-icon',
                children: [
                  /* @__PURE__ */ jsx('path', {
                    className: 'style-scope yt-icon',
                    d: 'm34.602 13.004-3.2079-11.585h2.7987l1.1242 5.2516c0.2869 1.2935 0.4962 2.3965 0.6326 3.309h0.0823c0.0941-0.65381 0.3058-1.7498 0.6327-3.2902l1.1641-5.2705h2.7987l-3.2479 11.585v5.5574h-2.7798v-5.5574h0.0023z',
                  }),
                  /* @__PURE__ */ jsx('path', {
                    className: 'style-scope yt-icon',
                    d: 'm41.47 18.194c-0.5644-0.381-0.9666-0.9737-1.2065-1.778-0.2375-0.8043-0.3574-1.872-0.3574-3.2079v-1.818c0-1.3476 0.1364-2.4318 0.4092-3.2478 0.2728-0.81608 0.6985-1.4134 1.277-1.7874 0.5786-0.37394 1.3382-0.56209 2.279-0.56209 0.9266 0 1.6674 0.1905 2.2271 0.5715 0.5574 0.38099 0.9666 0.97836 1.2253 1.7874 0.2587 0.81138 0.3881 1.8908 0.3881 3.2384v1.818c0 1.3359-0.127 2.4083-0.3786 3.2173-0.2517 0.8114-0.6609 1.4041-1.2254 1.778-0.5644 0.374-1.3311 0.5621-2.2977 0.5621-0.9972 0.0023-1.7756-0.1905-2.3401-0.5715zm3.1656-1.9614c0.1552-0.4092 0.2352-1.0748 0.2352-2.0014v-3.9017c0-0.89843-0.0776-1.557-0.2352-1.9709-0.1576-0.41627-0.4327-0.62323-0.8279-0.62323-0.3809 0-0.6514 0.20696-0.8066 0.62323-0.1576 0.41628-0.2352 1.0724-0.2352 1.9709v3.9017c0 0.9266 0.0752 1.5945 0.2258 2.0014 0.1505 0.4092 0.4209 0.6138 0.816 0.6138 0.3952 0 0.6703-0.2046 0.8279-0.6138z',
                  }),
                  /* @__PURE__ */ jsx('path', {
                    className: 'style-scope yt-icon',
                    d: 'm56.815 18.563h-2.206l-0.2446-1.5334h-0.0611c-0.5998 1.1571-1.4982 1.7356-2.6976 1.7356-0.8302 0-1.444-0.2728-1.8391-0.816-0.3951-0.5457-0.5927-1.397-0.5927-2.5541v-9.358h2.8199v9.1933c0 0.5598 0.0611 0.9572 0.1834 1.1948 0.1223 0.2375 0.3269 0.3574 0.6138 0.3574 0.2446 0 0.4798-0.0752 0.7056-0.2257 0.2258-0.1506 0.3904-0.3411 0.5009-0.5715v-9.9506h2.8175v12.528z',
                  }),
                  /* @__PURE__ */ jsx('path', {
                    className: 'style-scope yt-icon',
                    d: 'm64.476 3.6876h-2.7987v14.875h-2.7587v-14.875h-2.7987v-2.2672h8.3561v2.2672z',
                  }),
                  /* @__PURE__ */ jsx('path', {
                    className: 'style-scope yt-icon',
                    d: 'm71.277 18.563h-2.206l-0.2446-1.5334h-0.0611c-0.5997 1.1571-1.4981 1.7356-2.6976 1.7356-0.8302 0-1.444-0.2728-1.8391-0.816-0.3951-0.5457-0.5927-1.397-0.5927-2.5541v-9.358h2.8199v9.1933c0 0.5598 0.0611 0.9572 0.1834 1.1948 0.1223 0.2375 0.3269 0.3574 0.6139 0.3574 0.2445 0 0.4797-0.0752 0.7055-0.2257 0.2258-0.1506 0.3904-0.3411 0.5009-0.5715v-9.9506h2.8175v12.528z',
                  }),
                  /* @__PURE__ */ jsx('path', {
                    className: 'style-scope yt-icon',
                    d: 'm80.609 8.0387c-0.1717-0.79021-0.4469-1.3617-0.8278-1.7168-0.381-0.35512-0.9055-0.53151-1.5734-0.53151-0.5174 0-1.0019 0.14581-1.4511 0.43979s-0.7973 0.67733-1.0419 1.1548h-0.0211v-6.5992h-2.7164v17.775h2.3283l0.2869-1.1853h0.0612c0.2187 0.4233 0.5456 0.7549 0.9807 1.0019 0.4351 0.2446 0.9196 0.3669 1.4511 0.3669 0.9525 0 1.6557-0.4398 2.1049-1.3171 0.4492-0.8796 0.6749-2.2507 0.6749-4.118v-1.9826c0-1.3994-0.087-2.4977-0.2563-3.2879zm-2.5847 5.1105c0 0.9125-0.0376 1.6275-0.1129 2.1449-0.0752 0.5174-0.1999 0.8867-0.3786 1.103-0.1764 0.2187-0.4163 0.3269-0.715 0.3269-0.2328 0-0.4468-0.0541-0.6444-0.1646-0.1975-0.1082-0.3574-0.2728-0.4797-0.4892v-7.1096c0.094-0.34102 0.2587-0.61853 0.4915-0.83725 0.2305-0.21872 0.4845-0.32691 0.7549-0.32691 0.287 0 0.508 0.11289 0.6633 0.33632 0.1575 0.22577 0.2657 0.60207 0.3269 1.1336 0.0611 0.53151 0.0917 1.2864 0.0917 2.2671v1.6157h0.0023z',
                  }),
                  /* @__PURE__ */ jsx('path', {
                    className: 'style-scope yt-icon',
                    d: 'm84.866 13.871c0 0.8043 0.0235 1.4064 0.0706 1.8086 0.047 0.4021 0.1458 0.6938 0.2963 0.8796 0.1505 0.1834 0.381 0.2751 0.6938 0.2751 0.421 0 0.7126-0.1646 0.8678-0.4915 0.1576-0.3269 0.2423-0.8725 0.2564-1.6345l2.4318 0.1434c0.0141 0.1082 0.0211 0.2587 0.0211 0.4492 0 1.1571-0.3175 2.0226-0.9501 2.5941s-1.5287 0.8584-2.6858 0.8584c-1.3899 0-2.3636-0.4351-2.921-1.3076-0.5597-0.8725-0.8372-2.2201-0.8372-4.0452v-2.1872c0-1.8791 0.2893-3.2526 0.8678-4.118 0.5786-0.86548 1.5687-1.2982 2.9727-1.2982 0.9666 0 1.7098 0.17639 2.2272 0.53152 0.5174 0.35512 0.8819 0.90545 1.0936 1.6557 0.2117 0.75023 0.3175 1.785 0.3175 3.1067v2.1449h-4.7225v0.635zm0.3575-5.9031c-0.1435 0.17638-0.2375 0.46566-0.2869 0.86782-0.0471 0.40217-0.0706 1.0113-0.0706 1.8298v0.8984h2.0626v-0.8984c0-0.80437-0.0282-1.4135-0.0823-1.8298-0.0541-0.41627-0.1529-0.7079-0.2964-0.87958-0.1434-0.16933-0.3645-0.25635-0.6632-0.25635-0.301 0.00235-0.5221 0.09172-0.6632 0.26811z',
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
      /* @__PURE__ */ jsx('span', { className: styles$o.country, children: 'GT' }),
    ],
  });
}
YoutubeLogo.propTypes = {};
YoutubeLogo.defaultProps = {};
const navbar = '_navbar_1lnb6_1';
const buttonsContainer = '_buttonsContainer_1lnb6_13';
const secondContainer = '_secondContainer_1lnb6_18';
const styles$n = {
  navbar,
  buttonsContainer,
  secondContainer,
};
const searchBarContainer = '_searchBarContainer_q9oax_1';
const searchBar = '_searchBar_q9oax_1';
const inputContainer = '_inputContainer_q9oax_15';
const searchIconVisible = '_searchIconVisible_q9oax_35';
const searchIcon = '_searchIcon_q9oax_35';
const searchButton = '_searchButton_q9oax_69';
const talkButton = '_talkButton_q9oax_89';
const clearButton = '_clearButton_q9oax_93';
const styles$m = {
  searchBarContainer,
  searchBar,
  inputContainer,
  searchIconVisible,
  searchIcon,
  searchButton,
  talkButton,
  clearButton,
};
function ClearButton({ onClick, className }) {
  return /* @__PURE__ */ jsx(NavbarButton, {
    onClick,
    title: 'Crear',
    containerClass: className,
    children: /* @__PURE__ */ jsx('svg', {
      display: 'block',
      pointerEvents: 'none',
      focusable: 'false',
      viewBox: '0 0 24 24',
      xmlns: 'http://www.w3.org/2000/svg',
      children: /* @__PURE__ */ jsx('g', {
        children: /* @__PURE__ */ jsx('path', {
          d: 'm12.7 12 6.6 6.6-0.7 0.7-6.6-6.6-6.6 6.6-0.7-0.7 6.6-6.6-6.7-6.6 0.7-0.7 6.6 6.6 6.6-6.6 0.7 0.7-6.5 6.6z',
        }),
      }),
    }),
  });
}
ClearButton.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
};
ClearButton.defaultProps = {
  onClick: null,
  className: '',
};
const randomString = (length) => {
  let cadena = '';
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i += 1) {
    cadena += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }
  return cadena;
};
const searchOptionsContainer = '_searchOptionsContainer_1kieq_1';
const styles$l = {
  searchOptionsContainer,
};
const menuItem = '_menuItem_eqnnp_1';
const loadIcon = '_loadIcon_eqnnp_16';
const text = '_text_eqnnp_22';
const styles$k = {
  menuItem,
  loadIcon,
  text,
};
function SearchMenuItem({ text: text2 }) {
  return /* @__PURE__ */ jsxs('li', {
    className: styles$k.menuItem,
    children: [
      /* @__PURE__ */ jsx('span', { className: styles$k.loadIcon }),
      /* @__PURE__ */ jsx('span', { className: styles$k.text, children: text2 }),
      /* @__PURE__ */ jsx('a', { href: '/', children: 'Eliminar' }),
    ],
  });
}
SearchMenuItem.propTypes = {
  text: PropTypes.string.isRequired,
};
SearchMenuItem.defaultProps = {};
const options = [
  'cómo aprender JS en 1 minuto',
  'graduarme en computación sin saber programar',
  'cómo hacer 10 labs de web en 1 día',
  'videos motivacionales',
  'por qué angular es mejor que react?',
  'chatgpt me dejará sin chamba',
];
function SearchOptionsMenu() {
  return /* @__PURE__ */ jsx('ul', {
    className: styles$l.searchOptionsContainer,
    children: options.map((val) =>
      /* @__PURE__ */ jsx(SearchMenuItem, { text: val }, randomString(10))),
  });
}
SearchOptionsMenu.propTypes = {};
SearchOptionsMenu.defaultProps = {};
function SearchBar() {
  const [focused, setFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const clearSearchQuery = () => setSearchQuery('');
  return /* @__PURE__ */ jsx('div', {
    className: styles$m.searchBarContainer,
    children: /* @__PURE__ */ jsxs('div', {
      className: styles$m.searchBar,
      children: [
        /* @__PURE__ */ jsxs('div', {
          className: `${styles$m.inputContainer} ${focused ? styles$m.searchIconVisible : ''} `,
          children: [
            focused
            /* @__PURE__ */ && jsx('svg', {
              className: styles$m.searchIcon,
              display: 'block',
              pointerEvents: 'none',
              focusable: 'false',
              viewBox: '0 0 24 24',
              xmlns: 'http://www.w3.org/2000/svg',
              children: /* @__PURE__ */ jsx('g', {
                children: /* @__PURE__ */ jsx('path', {
                  d: 'm20.87 20.17-5.59-5.59c1.07-1.23 1.72-2.83 1.72-4.58 0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-0.65 4.58-1.71l5.59 5.59 0.7-0.71zm-10.87-4.17c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z',
                }),
              }),
            }),
            /* @__PURE__ */ jsx('input', {
              type: 'text',
              placeholder: 'Buscar',
              onFocus: () => setFocused(true),
              onBlur: () => setFocused(false),
              onChange: handleSearchChange,
              value: searchQuery,
            }),
            (searchQuery == null ? void 0 : searchQuery.length) > 0
            /* @__PURE__ */ && jsx(ClearButton, {
              className: styles$m.clearButton,
              onClick: clearSearchQuery,
            }),
            focused && /* @__PURE__ */ jsx(SearchOptionsMenu, {}),
          ],
        }),
        /* @__PURE__ */ jsx('button', {
          className: styles$m.searchButton,
          type: 'button',
          children: /* @__PURE__ */ jsx('svg', {
            display: 'block',
            pointerEvents: 'none',
            focusable: 'false',
            viewBox: '0 0 24 24',
            xmlns: 'http://www.w3.org/2000/svg',
            children: /* @__PURE__ */ jsx('g', {
              children: /* @__PURE__ */ jsx('path', {
                d: 'm20.87 20.17-5.59-5.59c1.07-1.23 1.72-2.83 1.72-4.58 0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-0.65 4.58-1.71l5.59 5.59 0.7-0.71zm-10.87-4.17c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z',
              }),
            }),
          }),
        }),
        /* @__PURE__ */ jsx(NavbarButton, {
          className: styles$m.talkButton,
          title: 'Haz búsquedas por voz',
          children: /* @__PURE__ */ jsx('svg', {
            display: 'block',
            pointerEvents: 'none',
            focusable: 'false',
            viewBox: '0 0 24 24',
            xmlns: 'http://www.w3.org/2000/svg',
            children: /* @__PURE__ */ jsx('g', {
              children: /* @__PURE__ */ jsx('path', {
                d: 'm12 3c-1.66 0-3 1.37-3 3.07v5.86c0 1.7 1.34 3.07 3 3.07s3-1.37 3-3.07v-5.86c0-1.7-1.34-3.07-3-3.07zm6.5 9h-1c0 3.03-2.47 5.5-5.5 5.5s-5.5-2.47-5.5-5.5h-1c0 3.24 2.39 5.93 5.5 6.41v2.59h2v-2.59c3.11-0.48 5.5-3.17 5.5-6.41z',
              }),
            }),
          }),
        }),
      ],
    }),
  });
}
function useSwitch(defaultValue) {
  const [switchState, setSwitchState] = useState(defaultValue || false);
  const changeSwitch = () => setSwitchState((val) => !val);
  return [switchState, changeSwitch];
}
const newVideoMenu = '_newVideoMenu_ab0jg_1';
const styles$j = {
  newVideoMenu,
};
const optionItemContainer$3 = '_optionItemContainer_cr2wb_1';
const optionItem$3 = '_optionItem_cr2wb_1';
const itemWithArrow = '_itemWithArrow_cr2wb_19';
const iconContainer$2 = '_iconContainer_cr2wb_23';
const arrowContainer = '_arrowContainer_cr2wb_31';
const styles$i = {
  optionItemContainer: optionItemContainer$3,
  optionItem: optionItem$3,
  itemWithArrow,
  iconContainer: iconContainer$2,
  arrowContainer,
};
function MenuOptionItem({ children, title: title2, showArrow }) {
  return /* @__PURE__ */ jsx('a', {
    href: '/',
    className: styles$i.optionItemContainer,
    children: /* @__PURE__ */ jsxs('div', {
      className: `${styles$i.optionItem} ${showArrow ? styles$i.itemWithArrow : ''}`,
      children: [
        /* @__PURE__ */ jsx('div', { className: styles$i.iconContainer, children }),
        /* @__PURE__ */ jsx('span', { children: title2 }),
        showArrow
        /* @__PURE__ */ && jsx('div', {
          className: styles$i.arrowContainer,
          children: /* @__PURE__ */ jsx('svg', {
            display: 'block',
            pointerEvents: 'none',
            focusable: 'false',
            viewBox: '0 0 24 24',
            xmlns: 'http://www.w3.org/2000/svg',
            children: /* @__PURE__ */ jsx('g', {
              children: /* @__PURE__ */ jsx('path', {
                d: 'm9.4 18.4-0.7-0.7 5.6-5.6-5.7-5.7 0.7-0.7 6.4 6.4-6.3 6.3z',
              }),
            }),
          }),
        }),
      ],
    }),
  });
}
MenuOptionItem.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  showArrow: PropTypes.bool,
};
MenuOptionItem.defaultProps = {
  showArrow: false,
};
function NewVideoMenu() {
  return /* @__PURE__ */ jsxs('div', {
    className: styles$j.newVideoMenu,
    children: [
      /* @__PURE__ */ jsx(MenuOptionItem, {
        title: 'Subir Vídeo',
        children: /* @__PURE__ */ jsx('svg', {
          display: 'block',
          pointerEvents: 'none',
          focusable: 'false',
          viewBox: '0 0 24 24',
          xmlns: 'http://www.w3.org/2000/svg',
          children: /* @__PURE__ */ jsx('g', {
            children: /* @__PURE__ */ jsx('path', {
              d: 'M10,8l6,4l-6,4V8L10,8z M21,3v18H3V3H21z M20,4H4v16h16V4z',
            }),
          }),
        }),
      }),
      /* @__PURE__ */ jsx(MenuOptionItem, {
        title: 'Emitir en directo',
        children: /* @__PURE__ */ jsx('svg', {
          display: 'block',
          pointerEvents: 'none',
          focusable: 'false',
          viewBox: '0 0 24 24',
          xmlns: 'http://www.w3.org/2000/svg',
          children: /* @__PURE__ */ jsxs('g', {
            children: [
              /* @__PURE__ */ jsx('path', {
                d: 'M16.94 6.91l-1.41 1.45c.9.94 1.46 2.22 1.46 3.64s-.56 2.71-1.46 3.64l1.41 1.45c1.27-1.31 2.05-3.11 2.05-5.09s-.78-3.79-2.05-5.09zM19.77 4l-1.41 1.45C19.98 7.13 21 9.44 21 12.01c0 2.57-1.01 4.88-2.64 6.54l1.4 1.45c2.01-2.04 3.24-4.87 3.24-7.99 0-3.13-1.23-5.96-3.23-8.01zM7.06 6.91c-1.27 1.3-2.05 3.1-2.05 5.09s.78 3.79 2.05 5.09l1.41-1.45c-.9-.94-1.46-2.22-1.46-3.64s.56-2.71 1.46-3.64L7.06 6.91zM5.64 5.45L4.24 4C2.23 6.04 1 8.87 1 11.99c0 3.13 1.23 5.96 3.23 8.01l1.41-1.45C4.02 16.87 3 14.56 3 11.99s1.01-4.88 2.64-6.54z',
              }),
              /* @__PURE__ */ jsx('circle', { cx: '12', cy: '12', r: '3' }),
            ],
          }),
        }),
      }),
    ],
  });
}
NewVideoMenu.propTypes = {};
NewVideoMenu.defaultProps = {};
const useOutsideClick = (callback, addListener) => {
  const ref = useRef();
  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };
    if (addListener) {
      document.addEventListener('click', handleClick, true);
    } else {
      document.removeEventListener('click', handleClick, true);
    }
    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [ref, addListener]);
  return ref;
};
function NewVideoButton() {
  const [selected2, toogleSelected] = useSwitch(false);
  const ref = useOutsideClick(toogleSelected, selected2);
  return /* @__PURE__ */ jsx(NavbarButton, {
    onClick: toogleSelected,
    title: 'Crear',
    refProp: ref,
    subMenu: selected2 && /* @__PURE__ */ jsx(NewVideoMenu, {}),
    children: selected2
      ? /* @__PURE__ */ jsx('svg', {
        viewBox: '0 0 24 24',
        preserveAspectRatio: 'xMidYMid meet',
        focusable: 'false',
        children: /* @__PURE__ */ jsx('g', {
          children: /* @__PURE__ */ jsx('path', {
            d: 'M18,8.83V5H2v14h16v-5.83L22,15V7L18,8.83z M14,13h-3v3H9v-3H6v-2h3V8h2v3h3V13z',
          }),
        }),
      })
      : /* @__PURE__ */ jsx('svg', {
        display: 'block',
        pointerEvents: 'none',
        focusable: 'false',
        viewBox: '0 0 24 24',
        xmlns: 'http://www.w3.org/2000/svg',
        children: /* @__PURE__ */ jsx('g', {
          children: /* @__PURE__ */ jsx('path', {
            d: 'M14,13h-3v3H9v-3H6v-2h3V8h2v3h3V13z M17,6H3v12h14v-6.39l4,1.83V8.56l-4,1.83V6 M18,5v3.83L22,7v8l-4-1.83V19H2V5H18L18,5 z',
          }),
        }),
      }),
  });
}
const notificationsPanel = '_notificationsPanel_2exl0_1';
const header = '_header_2exl0_15';
const initialLoading = '_initialLoading_2exl0_26';
const spinner = '_spinner_2exl0_33';
const notificationsContainer = '_notificationsContainer_2exl0_37';
const styles$h = {
  notificationsPanel,
  header,
  initialLoading,
  spinner,
  notificationsContainer,
};
function Spinner({ className }) {
  return /* @__PURE__ */ jsx('div', {
    className: `spinner ${className}`,
    children: /* @__PURE__ */ jsx('div', {}),
  });
}
const items = [
  {
    id: 'Tc-80aJhz_s',
    channelName: 'Malher',
    channelPictures: {
      default: {
        url: 'https://yt3.ggpht.com/xGVo042wwQrqQK-Kfji8VbmXiWF2VpfAR7l5B73y44-ZlzjgpNtAtYrCVJa4u0iHiSdde0JlTw=s88-c-k-c0x00ffffff-no-rj',
        width: 88,
        height: 88,
      },
      medium: {
        url: 'https://yt3.ggpht.com/xGVo042wwQrqQK-Kfji8VbmXiWF2VpfAR7l5B73y44-ZlzjgpNtAtYrCVJa4u0iHiSdde0JlTw=s240-c-k-c0x00ffffff-no-rj',
        width: 240,
        height: 240,
      },
      high: {
        url: 'https://yt3.ggpht.com/xGVo042wwQrqQK-Kfji8VbmXiWF2VpfAR7l5B73y44-ZlzjgpNtAtYrCVJa4u0iHiSdde0JlTw=s800-c-k-c0x00ffffff-no-rj',
        width: 800,
        height: 800,
      },
    },
    videoPictures: {
      default: {
        url: 'https://i.ytimg.com/vi/Tc-80aJhz_s/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/Tc-80aJhz_s/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/Tc-80aJhz_s/hqdefault.jpg',
        width: 480,
        height: 360,
      },
    },
    title: 'Preparados Pepián Malher®',
    date: '2021-08-31T16:22:55Z',
  },
  {
    id: 'JhqEUpheSoY',
    channelName: 'Honor México',
    channelPictures: {
      default: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqNfivYCLZLnHJH87JTphrFH7naxPFQiComB8Rs3eQ=s88-c-k-c0x00ffffff-no-rj',
        width: 88,
        height: 88,
      },
      medium: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqNfivYCLZLnHJH87JTphrFH7naxPFQiComB8Rs3eQ=s240-c-k-c0x00ffffff-no-rj',
        width: 240,
        height: 240,
      },
      high: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqNfivYCLZLnHJH87JTphrFH7naxPFQiComB8Rs3eQ=s800-c-k-c0x00ffffff-no-rj',
        width: 800,
        height: 800,
      },
    },
    videoPictures: {
      default: {
        url: 'https://i.ytimg.com/vi/JhqEUpheSoY/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/JhqEUpheSoY/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/JhqEUpheSoY/hqdefault.jpg',
        width: 480,
        height: 360,
      },
    },
    title:
      'HONOR X7 |  Diseño premium, HONOR RAM Turbo y Snapdragon 680 de 6nm para un mejor rendimiento.',
    date: '2022-05-12T23:59:54Z',
  },
  {
    id: 'WYG5iPLNDyw',
    channelName: 'LG Global',
    channelPictures: {
      default: {
        url: 'https://yt3.ggpht.com/ZNlUENj7IntwhJbwX2UGPMjFIVTNI6EpkpHpxdStagp9UeCnbc-4t_q-yz1OHq2tuufWGu-5Ppk=s88-c-k-c0x00ffffff-no-rj',
        width: 88,
        height: 88,
      },
      medium: {
        url: 'https://yt3.ggpht.com/ZNlUENj7IntwhJbwX2UGPMjFIVTNI6EpkpHpxdStagp9UeCnbc-4t_q-yz1OHq2tuufWGu-5Ppk=s240-c-k-c0x00ffffff-no-rj',
        width: 240,
        height: 240,
      },
      high: {
        url: 'https://yt3.ggpht.com/ZNlUENj7IntwhJbwX2UGPMjFIVTNI6EpkpHpxdStagp9UeCnbc-4t_q-yz1OHq2tuufWGu-5Ppk=s800-c-k-c0x00ffffff-no-rj',
        width: 800,
        height: 800,
      },
    },
    videoPictures: {
      default: {
        url: 'https://i.ytimg.com/vi/WYG5iPLNDyw/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/WYG5iPLNDyw/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/WYG5iPLNDyw/hqdefault.jpg',
        width: 480,
        height: 360,
      },
    },
    title: 'LG DualUp Ergo : Designed Around You | LG',
    date: '2022-05-30T01:19:31Z',
  },
  {
    id: 'RGGDbZfLAZc',
    channelName: 'Malher',
    channelPictures: {
      default: {
        url: 'https://yt3.ggpht.com/xGVo042wwQrqQK-Kfji8VbmXiWF2VpfAR7l5B73y44-ZlzjgpNtAtYrCVJa4u0iHiSdde0JlTw=s88-c-k-c0x00ffffff-no-rj',
        width: 88,
        height: 88,
      },
      medium: {
        url: 'https://yt3.ggpht.com/xGVo042wwQrqQK-Kfji8VbmXiWF2VpfAR7l5B73y44-ZlzjgpNtAtYrCVJa4u0iHiSdde0JlTw=s240-c-k-c0x00ffffff-no-rj',
        width: 240,
        height: 240,
      },
      high: {
        url: 'https://yt3.ggpht.com/xGVo042wwQrqQK-Kfji8VbmXiWF2VpfAR7l5B73y44-ZlzjgpNtAtYrCVJa4u0iHiSdde0JlTw=s800-c-k-c0x00ffffff-no-rj',
        width: 800,
        height: 800,
      },
    },
    videoPictures: {
      default: {
        url: 'https://i.ytimg.com/vi/RGGDbZfLAZc/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/RGGDbZfLAZc/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/RGGDbZfLAZc/hqdefault.jpg',
        width: 480,
        height: 360,
      },
    },
    title: 'Preparado Carne guisada Malher®',
    date: '2021-08-31T15:43:13Z',
  },
  {
    id: 'mRFfUDTcydg',
    channelName: 'Noticias Telemundo',
    channelPictures: {
      default: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqPv3bDDxS2YJtharBhZCBlwUdh1KBB3ZcuncbJAQA=s88-c-k-c0x00ffffff-no-rj',
        width: 88,
        height: 88,
      },
      medium: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqPv3bDDxS2YJtharBhZCBlwUdh1KBB3ZcuncbJAQA=s240-c-k-c0x00ffffff-no-rj',
        width: 240,
        height: 240,
      },
      high: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqPv3bDDxS2YJtharBhZCBlwUdh1KBB3ZcuncbJAQA=s800-c-k-c0x00ffffff-no-rj',
        width: 800,
        height: 800,
      },
    },
    videoPictures: {
      default: {
        url: 'https://i.ytimg.com/vi/mRFfUDTcydg/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/mRFfUDTcydg/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/mRFfUDTcydg/hqdefault.jpg',
        width: 480,
        height: 360,
      },
    },
    title:
      'Mujeres ensamblan el primer auto eléctrico mexicano en una planta de Puebla | Noticias Telemundo',
    date: '2022-05-02T13:47:26Z',
  },
  {
    id: 'QNzOzqMrHKY',
    channelName: 'Las Estrellas',
    channelPictures: {
      default: {
        url: 'https://yt3.ggpht.com/mcJk5qIg2WXiIX-FSMiSWD-alqCj8fkMb8U4z25bcLL1y8hHol8h_8GGHeLAnNcaZZFkbdvhLg=s88-c-k-c0x00ffffff-no-rj',
        width: 88,
        height: 88,
      },
      medium: {
        url: 'https://yt3.ggpht.com/mcJk5qIg2WXiIX-FSMiSWD-alqCj8fkMb8U4z25bcLL1y8hHol8h_8GGHeLAnNcaZZFkbdvhLg=s240-c-k-c0x00ffffff-no-rj',
        width: 240,
        height: 240,
      },
      high: {
        url: 'https://yt3.ggpht.com/mcJk5qIg2WXiIX-FSMiSWD-alqCj8fkMb8U4z25bcLL1y8hHol8h_8GGHeLAnNcaZZFkbdvhLg=s800-c-k-c0x00ffffff-no-rj',
        width: 800,
        height: 800,
      },
    },
    videoPictures: {
      default: {
        url: 'https://i.ytimg.com/vi/QNzOzqMrHKY/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/QNzOzqMrHKY/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/QNzOzqMrHKY/hqdefault.jpg',
        width: 480,
        height: 360,
      },
    },
    title: 'AVANCE - C-53: ¿Rafael se irá del instituto? | Médicos, línea de vida - Las Estrellas',
    date: '2020-01-22T04:45:00Z',
  },
  {
    id: 'sl6e5F8I2bQ',
    channelName: 'What If',
    channelPictures: {
      default: {
        url: 'https://yt3.ggpht.com/JU70Nk6-XAKJzrYFZVWiu2SIOy9VxMz2oYL0eZgWycpJ5SYcn7MoAROh-kDAUFaDbxNf9O4Htw=s88-c-k-c0x00ffffff-no-rj',
        width: 88,
        height: 88,
      },
      medium: {
        url: 'https://yt3.ggpht.com/JU70Nk6-XAKJzrYFZVWiu2SIOy9VxMz2oYL0eZgWycpJ5SYcn7MoAROh-kDAUFaDbxNf9O4Htw=s240-c-k-c0x00ffffff-no-rj',
        width: 240,
        height: 240,
      },
      high: {
        url: 'https://yt3.ggpht.com/JU70Nk6-XAKJzrYFZVWiu2SIOy9VxMz2oYL0eZgWycpJ5SYcn7MoAROh-kDAUFaDbxNf9O4Htw=s800-c-k-c0x00ffffff-no-rj',
        width: 800,
        height: 800,
      },
    },
    videoPictures: {
      default: {
        url: 'https://i.ytimg.com/vi/sl6e5F8I2bQ/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/sl6e5F8I2bQ/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/sl6e5F8I2bQ/hqdefault.jpg',
        width: 480,
        height: 360,
      },
    },
    title: 'What If Everyone&#39;s Memories Were Erased?',
    date: '2021-12-18T16:00:22Z',
  },
  {
    id: 'px0s8cZBl1s',
    channelName: 'Las Estrellas',
    channelPictures: {
      default: {
        url: 'https://yt3.ggpht.com/mcJk5qIg2WXiIX-FSMiSWD-alqCj8fkMb8U4z25bcLL1y8hHol8h_8GGHeLAnNcaZZFkbdvhLg=s88-c-k-c0x00ffffff-no-rj',
        width: 88,
        height: 88,
      },
      medium: {
        url: 'https://yt3.ggpht.com/mcJk5qIg2WXiIX-FSMiSWD-alqCj8fkMb8U4z25bcLL1y8hHol8h_8GGHeLAnNcaZZFkbdvhLg=s240-c-k-c0x00ffffff-no-rj',
        width: 240,
        height: 240,
      },
      high: {
        url: 'https://yt3.ggpht.com/mcJk5qIg2WXiIX-FSMiSWD-alqCj8fkMb8U4z25bcLL1y8hHol8h_8GGHeLAnNcaZZFkbdvhLg=s800-c-k-c0x00ffffff-no-rj',
        width: 800,
        height: 800,
      },
    },
    videoPictures: {
      default: {
        url: 'https://i.ytimg.com/vi/px0s8cZBl1s/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/px0s8cZBl1s/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/px0s8cZBl1s/hqdefault.jpg',
        width: 480,
        height: 360,
      },
    },
    title: 'AVANCE: Comenzar de nuevo | Estreno 29 de agosto | Corona de lágrimas 2',
    date: '2022-08-01T18:15:04Z',
  },
  {
    id: 'mfneQsn8kjk',
    channelName: 'Las Estrellas',
    channelPictures: {
      default: {
        url: 'https://yt3.ggpht.com/mcJk5qIg2WXiIX-FSMiSWD-alqCj8fkMb8U4z25bcLL1y8hHol8h_8GGHeLAnNcaZZFkbdvhLg=s88-c-k-c0x00ffffff-no-rj',
        width: 88,
        height: 88,
      },
      medium: {
        url: 'https://yt3.ggpht.com/mcJk5qIg2WXiIX-FSMiSWD-alqCj8fkMb8U4z25bcLL1y8hHol8h_8GGHeLAnNcaZZFkbdvhLg=s240-c-k-c0x00ffffff-no-rj',
        width: 240,
        height: 240,
      },
      high: {
        url: 'https://yt3.ggpht.com/mcJk5qIg2WXiIX-FSMiSWD-alqCj8fkMb8U4z25bcLL1y8hHol8h_8GGHeLAnNcaZZFkbdvhLg=s800-c-k-c0x00ffffff-no-rj',
        width: 800,
        height: 800,
      },
    },
    videoPictures: {
      default: {
        url: 'https://i.ytimg.com/vi/mfneQsn8kjk/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/mfneQsn8kjk/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/mfneQsn8kjk/hqdefault.jpg',
        width: 480,
        height: 360,
      },
    },
    title: 'AVANCE: ¿Guadalupe le revelará la verdad a Mariluz? | Esta semana | Corazón guerrero',
    date: '2022-03-29T00:15:01Z',
  },
  {
    id: '5omfLeMsotA',
    channelName: 'Warner Bros. Pictures Latinoamérica',
    channelPictures: {
      default: {
        url: 'https://yt3.ggpht.com/24q_SVox_JjalN7eN1M6D5oLzCOJveZVMmiGxtMkWW5A2oleLhwfcf68jHVld41PwU4tcVagXoQ=s88-c-k-c0x00ffffff-no-rj',
        width: 88,
        height: 88,
      },
      medium: {
        url: 'https://yt3.ggpht.com/24q_SVox_JjalN7eN1M6D5oLzCOJveZVMmiGxtMkWW5A2oleLhwfcf68jHVld41PwU4tcVagXoQ=s240-c-k-c0x00ffffff-no-rj',
        width: 240,
        height: 240,
      },
      high: {
        url: 'https://yt3.ggpht.com/24q_SVox_JjalN7eN1M6D5oLzCOJveZVMmiGxtMkWW5A2oleLhwfcf68jHVld41PwU4tcVagXoQ=s800-c-k-c0x00ffffff-no-rj',
        width: 800,
        height: 800,
      },
    },
    videoPictures: {
      default: {
        url: 'https://i.ytimg.com/vi/5omfLeMsotA/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/5omfLeMsotA/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/5omfLeMsotA/hqdefault.jpg',
        width: 480,
        height: 360,
      },
    },
    title: 'BATMAN- ACERTIJO 15&quot;- 03 DE MARZO SOLO EN CINES',
    date: '2022-01-27T00:35:03Z',
  },
  {
    id: 'XbV0jirGuTY',
    channelName: 'Garena Free Fire LATAM',
    channelPictures: {
      default: {
        url: 'https://yt3.ggpht.com/ta06IRIS0-HMzi8F04GZBqODwHL_QFxIMFzB2u-y-bgxRE78PQAUeHixfq-Or7MBUQDf0d0WnA=s88-c-k-c0x00ffffff-no-rj',
        width: 88,
        height: 88,
      },
      medium: {
        url: 'https://yt3.ggpht.com/ta06IRIS0-HMzi8F04GZBqODwHL_QFxIMFzB2u-y-bgxRE78PQAUeHixfq-Or7MBUQDf0d0WnA=s240-c-k-c0x00ffffff-no-rj',
        width: 240,
        height: 240,
      },
      high: {
        url: 'https://yt3.ggpht.com/ta06IRIS0-HMzi8F04GZBqODwHL_QFxIMFzB2u-y-bgxRE78PQAUeHixfq-Or7MBUQDf0d0WnA=s800-c-k-c0x00ffffff-no-rj',
        width: 800,
        height: 800,
      },
    },
    videoPictures: {
      default: {
        url: 'https://i.ytimg.com/vi/XbV0jirGuTY/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/XbV0jirGuTY/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/XbV0jirGuTY/hqdefault.jpg',
        width: 480,
        height: 360,
      },
    },
    title: '¡LA NUEVA ACTUALIZACIÓN DE FREE FIRE! 🔥 World Series ⭐ | Garena Free Fire',
    date: '2021-04-07T21:00:25Z',
  },
  {
    id: 'HOP1QoK8yrM',
    channelName: 'Noticias Telemundo',
    channelPictures: {
      default: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqPv3bDDxS2YJtharBhZCBlwUdh1KBB3ZcuncbJAQA=s88-c-k-c0x00ffffff-no-rj',
        width: 88,
        height: 88,
      },
      medium: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqPv3bDDxS2YJtharBhZCBlwUdh1KBB3ZcuncbJAQA=s240-c-k-c0x00ffffff-no-rj',
        width: 240,
        height: 240,
      },
      high: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqPv3bDDxS2YJtharBhZCBlwUdh1KBB3ZcuncbJAQA=s800-c-k-c0x00ffffff-no-rj',
        width: 800,
        height: 800,
      },
    },
    videoPictures: {
      default: {
        url: 'https://i.ytimg.com/vi/HOP1QoK8yrM/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/HOP1QoK8yrM/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/HOP1QoK8yrM/hqdefault.jpg',
        width: 480,
        height: 360,
      },
    },
    title: 'Vende comida ucraniana en Guatemala para ayudar a los suyos | Noticias Telemundo',
    date: '2022-03-05T06:03:24Z',
  },
  {
    id: '1BgnvNmwPWs',
    channelName: 'MBCNEWS',
    channelPictures: {
      default: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqN3eZXyP4beYqmWcZ7MOHUek1XIXTdZedNUdvJi0Q=s88-c-k-c0x00ffffff-no-rj',
        width: 88,
        height: 88,
      },
      medium: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqN3eZXyP4beYqmWcZ7MOHUek1XIXTdZedNUdvJi0Q=s240-c-k-c0x00ffffff-no-rj',
        width: 240,
        height: 240,
      },
      high: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqN3eZXyP4beYqmWcZ7MOHUek1XIXTdZedNUdvJi0Q=s800-c-k-c0x00ffffff-no-rj',
        width: 800,
        height: 800,
      },
    },
    videoPictures: {
      default: {
        url: 'https://i.ytimg.com/vi/1BgnvNmwPWs/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/1BgnvNmwPWs/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/1BgnvNmwPWs/hqdefault.jpg',
        width: 480,
        height: 360,
      },
    },
    title: '[스마트 리빙] 포장 두부 물에 헹궈야 할까? (2021.02.22/뉴스투데이/MBC)',
    date: '2021-02-21T23:11:40Z',
  },
  {
    id: 'CVAyJvaptsM',
    channelName: 'NBA',
    channelPictures: {
      default: {
        url: 'https://yt3.ggpht.com/urNLBJGryDamao5r0jmlTg84mIBOoaeJd6XR67j4nuRd0iRvv5g-MUgaowsWKCs8V_t4KwST=s88-c-k-c0x00ffffff-no-rj',
        width: 88,
        height: 88,
      },
      medium: {
        url: 'https://yt3.ggpht.com/urNLBJGryDamao5r0jmlTg84mIBOoaeJd6XR67j4nuRd0iRvv5g-MUgaowsWKCs8V_t4KwST=s240-c-k-c0x00ffffff-no-rj',
        width: 240,
        height: 240,
      },
      high: {
        url: 'https://yt3.ggpht.com/urNLBJGryDamao5r0jmlTg84mIBOoaeJd6XR67j4nuRd0iRvv5g-MUgaowsWKCs8V_t4KwST=s800-c-k-c0x00ffffff-no-rj',
        width: 800,
        height: 800,
      },
    },
    videoPictures: {
      default: {
        url: 'https://i.ytimg.com/vi/CVAyJvaptsM/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/CVAyJvaptsM/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/CVAyJvaptsM/hqdefault.jpg',
        width: 480,
        height: 360,
      },
    },
    title: 'NBA Top 10 Plays of the Night | November 1, 2022',
    date: '2022-11-02T05:55:52Z',
  },
  {
    id: 'zyA68Gs1Mto',
    channelName: 'The New York Times',
    channelPictures: {
      default: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqMDE-H9WEJxCm_NVJJxfn9_vU9MU2u6Bdu3LcAn0Q=s88-c-k-c0x00ffffff-no-rj',
        width: 88,
        height: 88,
      },
      medium: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqMDE-H9WEJxCm_NVJJxfn9_vU9MU2u6Bdu3LcAn0Q=s240-c-k-c0x00ffffff-no-rj',
        width: 240,
        height: 240,
      },
      high: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqMDE-H9WEJxCm_NVJJxfn9_vU9MU2u6Bdu3LcAn0Q=s800-c-k-c0x00ffffff-no-rj',
        width: 800,
        height: 800,
      },
    },
    videoPictures: {
      default: {
        url: 'https://i.ytimg.com/vi/zyA68Gs1Mto/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/zyA68Gs1Mto/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/zyA68Gs1Mto/hqdefault.jpg',
        width: 480,
        height: 360,
      },
    },
    title: 'We’ve Lost Two Years to Covid. It’s Time to Grieve. | NYT Opinion',
    date: '2021-12-29T18:00:33Z',
  },
  {
    id: '8f52Bwkdc10',
    channelName: 'RTVE Noticias',
    channelPictures: {
      default: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqNE6heOUyE2xZfK9O13AIp9VWQt6dnr1M9VcDIkYA=s88-c-k-c0x00ffffff-no-rj',
        width: 88,
        height: 88,
      },
      medium: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqNE6heOUyE2xZfK9O13AIp9VWQt6dnr1M9VcDIkYA=s240-c-k-c0x00ffffff-no-rj',
        width: 240,
        height: 240,
      },
      high: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqNE6heOUyE2xZfK9O13AIp9VWQt6dnr1M9VcDIkYA=s800-c-k-c0x00ffffff-no-rj',
        width: 800,
        height: 800,
      },
    },
    videoPictures: {
      default: {
        url: 'https://i.ytimg.com/vi/8f52Bwkdc10/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/8f52Bwkdc10/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/8f52Bwkdc10/hqdefault.jpg',
        width: 480,
        height: 360,
      },
    },
    title:
      'GUERRA UCRANIA: El PIB ruso CAE pero las SANCIONES no consiguen COLAPSAR su ECONOMÍA | RTVE Noticias',
    date: '2022-04-25T15:07:11Z',
  },
  {
    id: 'VljdrRSfM2Y',
    channelName: 'LaLiga Santander',
    channelPictures: {
      default: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqMALAmUIqDqBKvnJJWF2XSUykCOH9NGzdykMxU9Hw=s88-c-k-c0x00ffffff-no-rj',
        width: 88,
        height: 88,
      },
      medium: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqMALAmUIqDqBKvnJJWF2XSUykCOH9NGzdykMxU9Hw=s240-c-k-c0x00ffffff-no-rj',
        width: 240,
        height: 240,
      },
      high: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqMALAmUIqDqBKvnJJWF2XSUykCOH9NGzdykMxU9Hw=s800-c-k-c0x00ffffff-no-rj',
        width: 800,
        height: 800,
      },
    },
    videoPictures: {
      default: {
        url: 'https://i.ytimg.com/vi/VljdrRSfM2Y/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/VljdrRSfM2Y/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/VljdrRSfM2Y/hqdefault.jpg',
        width: 480,
        height: 360,
      },
    },
    title: 'Real Madrid Campeón de LaLiga Santander 2021/2022 - TOP 5 Goles',
    date: '2022-04-30T16:10:52Z',
  },
  {
    id: '06rqStgDGLg',
    channelName: 'Grupo Menarini Centroamérica y el Caribe',
    channelPictures: {
      default: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqNG1RR0j1x-fJlKEPcn7nzpBOMlwM1KCPeELOYBkw=s88-c-k-c0x00ffffff-no-rj',
        width: 88,
        height: 88,
      },
      medium: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqNG1RR0j1x-fJlKEPcn7nzpBOMlwM1KCPeELOYBkw=s240-c-k-c0x00ffffff-no-rj',
        width: 240,
        height: 240,
      },
      high: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqNG1RR0j1x-fJlKEPcn7nzpBOMlwM1KCPeELOYBkw=s800-c-k-c0x00ffffff-no-rj',
        width: 800,
        height: 800,
      },
    },
    videoPictures: {
      default: {
        url: 'https://i.ytimg.com/vi/06rqStgDGLg/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/06rqStgDGLg/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/06rqStgDGLg/hqdefault.jpg',
        width: 480,
        height: 360,
      },
    },
    title: 'Espasmo Digestomen',
    date: '2021-12-01T23:07:47Z',
  },
  {
    id: 'mklMXrXq8Ko',
    channelName: 'DW Español',
    channelPictures: {
      default: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqMWu-K2YYzOuCD6LbIeo6HHGnVGn-KaTq9OZcmF=s88-c-k-c0x00ffffff-no-rj',
        width: 88,
        height: 88,
      },
      medium: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqMWu-K2YYzOuCD6LbIeo6HHGnVGn-KaTq9OZcmF=s240-c-k-c0x00ffffff-no-rj',
        width: 240,
        height: 240,
      },
      high: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqMWu-K2YYzOuCD6LbIeo6HHGnVGn-KaTq9OZcmF=s800-c-k-c0x00ffffff-no-rj',
        width: 800,
        height: 800,
      },
    },
    videoPictures: {
      default: {
        url: 'https://i.ytimg.com/vi/mklMXrXq8Ko/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/mklMXrXq8Ko/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/mklMXrXq8Ko/hqdefault.jpg',
        width: 480,
        height: 360,
      },
    },
    title: 'Ucrania se prepara para defender Donetsk',
    date: '2022-07-05T15:36:41Z',
  },
  {
    id: 'x7ghjzWWdCk',
    channelName: 'TUDN México',
    channelPictures: {
      default: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqNpOVOJ1cbgqtUedt08NQRHNCcJZKlrUzvzk_kphg=s88-c-k-c0x00ffffff-no-rj',
        width: 88,
        height: 88,
      },
      medium: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqNpOVOJ1cbgqtUedt08NQRHNCcJZKlrUzvzk_kphg=s240-c-k-c0x00ffffff-no-rj',
        width: 240,
        height: 240,
      },
      high: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqNpOVOJ1cbgqtUedt08NQRHNCcJZKlrUzvzk_kphg=s800-c-k-c0x00ffffff-no-rj',
        width: 800,
        height: 800,
      },
    },
    videoPictures: {
      default: {
        url: 'https://i.ytimg.com/vi/x7ghjzWWdCk/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/x7ghjzWWdCk/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/x7ghjzWWdCk/hqdefault.jpg',
        width: 480,
        height: 360,
      },
    },
    title:
      '¡México cae con Guatemala! Tanda de penales completa | Guatemala 1-1 México | CONCACAF Sub 20 | TUDN',
    date: '2022-06-30T04:52:50Z',
  },
  {
    id: '2oTskfgp1Xo',
    channelName: 'Honor México',
    channelPictures: {
      default: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqNfivYCLZLnHJH87JTphrFH7naxPFQiComB8Rs3eQ=s88-c-k-c0x00ffffff-no-rj',
        width: 88,
        height: 88,
      },
      medium: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqNfivYCLZLnHJH87JTphrFH7naxPFQiComB8Rs3eQ=s240-c-k-c0x00ffffff-no-rj',
        width: 240,
        height: 240,
      },
      high: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqNfivYCLZLnHJH87JTphrFH7naxPFQiComB8Rs3eQ=s800-c-k-c0x00ffffff-no-rj',
        width: 800,
        height: 800,
      },
    },
    videoPictures: {
      default: {
        url: 'https://i.ytimg.com/vi/2oTskfgp1Xo/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/2oTskfgp1Xo/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/2oTskfgp1Xo/hqdefault.jpg',
        width: 480,
        height: 360,
      },
    },
    title: 'HONOR X8 | Elegante y eXtraordinario. RAM Turbo para mejor rendimiento.',
    date: '2022-04-22T16:15:10Z',
  },
  {
    id: 'kPzMDPbxtI4',
    channelName: 'Noticias Telemundo',
    channelPictures: {
      default: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqPv3bDDxS2YJtharBhZCBlwUdh1KBB3ZcuncbJAQA=s88-c-k-c0x00ffffff-no-rj',
        width: 88,
        height: 88,
      },
      medium: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqPv3bDDxS2YJtharBhZCBlwUdh1KBB3ZcuncbJAQA=s240-c-k-c0x00ffffff-no-rj',
        width: 240,
        height: 240,
      },
      high: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqPv3bDDxS2YJtharBhZCBlwUdh1KBB3ZcuncbJAQA=s800-c-k-c0x00ffffff-no-rj',
        width: 800,
        height: 800,
      },
    },
    videoPictures: {
      default: {
        url: 'https://i.ytimg.com/vi/kPzMDPbxtI4/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/kPzMDPbxtI4/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/kPzMDPbxtI4/hqdefault.jpg',
        width: 480,
        height: 360,
      },
    },
    title: 'Noticias Telemundo Mediodía, 6 de Mayo 2022 | Noticias Telemundo',
    date: '2022-05-06T17:05:08Z',
  },
  {
    id: 'eaIq2Qaoee0',
    channelName: 'DW Español',
    channelPictures: {
      default: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqMWu-K2YYzOuCD6LbIeo6HHGnVGn-KaTq9OZcmF=s88-c-k-c0x00ffffff-no-rj',
        width: 88,
        height: 88,
      },
      medium: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqMWu-K2YYzOuCD6LbIeo6HHGnVGn-KaTq9OZcmF=s240-c-k-c0x00ffffff-no-rj',
        width: 240,
        height: 240,
      },
      high: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqMWu-K2YYzOuCD6LbIeo6HHGnVGn-KaTq9OZcmF=s800-c-k-c0x00ffffff-no-rj',
        width: 800,
        height: 800,
      },
    },
    videoPictures: {
      default: {
        url: 'https://i.ytimg.com/vi/eaIq2Qaoee0/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/eaIq2Qaoee0/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/eaIq2Qaoee0/hqdefault.jpg',
        width: 480,
        height: 360,
      },
    },
    title: 'La ministra de Exteriores de Alemania insta a suministrar armas pesadas a Ucrania',
    date: '2022-04-11T20:15:00Z',
  },
  {
    id: 'Haa0YD9gVg8',
    channelName: 'FIFA',
    channelPictures: {
      default: {
        url: 'https://yt3.ggpht.com/jalTg8mUyHsp4kiCVCFV03tvzuMdyijSIiOY-zDJLlW0iwxSLk3FANBslcXMm7l8FCQ8Uktj=s88-c-k-c0x00ffffff-no-rj',
        width: 88,
        height: 88,
      },
      medium: {
        url: 'https://yt3.ggpht.com/jalTg8mUyHsp4kiCVCFV03tvzuMdyijSIiOY-zDJLlW0iwxSLk3FANBslcXMm7l8FCQ8Uktj=s240-c-k-c0x00ffffff-no-rj',
        width: 240,
        height: 240,
      },
      high: {
        url: 'https://yt3.ggpht.com/jalTg8mUyHsp4kiCVCFV03tvzuMdyijSIiOY-zDJLlW0iwxSLk3FANBslcXMm7l8FCQ8Uktj=s800-c-k-c0x00ffffff-no-rj',
        width: 800,
        height: 800,
      },
    },
    videoPictures: {
      default: {
        url: 'https://i.ytimg.com/vi/Haa0YD9gVg8/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/Haa0YD9gVg8/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/Haa0YD9gVg8/hqdefault.jpg',
        width: 480,
        height: 360,
      },
    },
    title: 'Guatemala v RFU | FIFA Futsal World Cup 2021 | Match Highlights',
    date: '2021-09-18T17:45:53Z',
  },
  {
    id: '6cZQyTrAPXc',
    channelName: 'Las Estrellas',
    channelPictures: {
      default: {
        url: 'https://yt3.ggpht.com/mcJk5qIg2WXiIX-FSMiSWD-alqCj8fkMb8U4z25bcLL1y8hHol8h_8GGHeLAnNcaZZFkbdvhLg=s88-c-k-c0x00ffffff-no-rj',
        width: 88,
        height: 88,
      },
      medium: {
        url: 'https://yt3.ggpht.com/mcJk5qIg2WXiIX-FSMiSWD-alqCj8fkMb8U4z25bcLL1y8hHol8h_8GGHeLAnNcaZZFkbdvhLg=s240-c-k-c0x00ffffff-no-rj',
        width: 240,
        height: 240,
      },
      high: {
        url: 'https://yt3.ggpht.com/mcJk5qIg2WXiIX-FSMiSWD-alqCj8fkMb8U4z25bcLL1y8hHol8h_8GGHeLAnNcaZZFkbdvhLg=s800-c-k-c0x00ffffff-no-rj',
        width: 800,
        height: 800,
      },
    },
    videoPictures: {
      default: {
        url: 'https://i.ytimg.com/vi/6cZQyTrAPXc/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/6cZQyTrAPXc/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/6cZQyTrAPXc/hqdefault.jpg',
        width: 480,
        height: 360,
      },
    },
    title:
      'AVANCE C12: ¡Octavio descubrirá que Fernanda le salvó la vida! | Este martes | La Desalmada',
    date: '2021-07-20T14:30:01Z',
  },
  {
    id: 'OOCXunk7ncI',
    channelName: 'Las Estrellas',
    channelPictures: {
      default: {
        url: 'https://yt3.ggpht.com/mcJk5qIg2WXiIX-FSMiSWD-alqCj8fkMb8U4z25bcLL1y8hHol8h_8GGHeLAnNcaZZFkbdvhLg=s88-c-k-c0x00ffffff-no-rj',
        width: 88,
        height: 88,
      },
      medium: {
        url: 'https://yt3.ggpht.com/mcJk5qIg2WXiIX-FSMiSWD-alqCj8fkMb8U4z25bcLL1y8hHol8h_8GGHeLAnNcaZZFkbdvhLg=s240-c-k-c0x00ffffff-no-rj',
        width: 240,
        height: 240,
      },
      high: {
        url: 'https://yt3.ggpht.com/mcJk5qIg2WXiIX-FSMiSWD-alqCj8fkMb8U4z25bcLL1y8hHol8h_8GGHeLAnNcaZZFkbdvhLg=s800-c-k-c0x00ffffff-no-rj',
        width: 800,
        height: 800,
      },
    },
    videoPictures: {
      default: {
        url: 'https://i.ytimg.com/vi/OOCXunk7ncI/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/OOCXunk7ncI/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/OOCXunk7ncI/hqdefault.jpg',
        width: 480,
        height: 360,
      },
    },
    title: 'Julia se lleva una desagradable noticia sobre Misael | Vencer la Ausencia 4/5 | C-11',
    date: '2022-08-02T03:00:19Z',
  },
  {
    id: 'awavGfkNy20',
    channelName: 'ESPN Deportes',
    channelPictures: {
      default: {
        url: 'https://yt3.ggpht.com/Nc__C3VMt7TvZ2zBcdB8B3YBYtrSB-hqBbp4lPbaloUUjvzyP9xyv3AqYWH1jx5J2T9f9wk-Xw=s88-c-k-c0x00ffffff-no-rj',
        width: 88,
        height: 88,
      },
      medium: {
        url: 'https://yt3.ggpht.com/Nc__C3VMt7TvZ2zBcdB8B3YBYtrSB-hqBbp4lPbaloUUjvzyP9xyv3AqYWH1jx5J2T9f9wk-Xw=s240-c-k-c0x00ffffff-no-rj',
        width: 240,
        height: 240,
      },
      high: {
        url: 'https://yt3.ggpht.com/Nc__C3VMt7TvZ2zBcdB8B3YBYtrSB-hqBbp4lPbaloUUjvzyP9xyv3AqYWH1jx5J2T9f9wk-Xw=s800-c-k-c0x00ffffff-no-rj',
        width: 800,
        height: 800,
      },
    },
    videoPictures: {
      default: {
        url: 'https://i.ytimg.com/vi/awavGfkNy20/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/awavGfkNy20/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/awavGfkNy20/hqdefault.jpg',
        width: 480,
        height: 360,
      },
    },
    title:
      'EXPLOTAN en Picante por el FRACASO del Tri. México, FUERA del mundial y Olímpicos | Futbol Picante',
    date: '2022-06-30T16:01:08Z',
  },
  {
    id: 'oIgAbDaFzLQ',
    channelName: 'Animal Planet Latinoamérica',
    channelPictures: {
      default: {
        url: 'https://yt3.ggpht.com/WnnbIil6FaFBK5mrQ5AP0-IhfYYuY7sUe8DAeVCRGnP1KlIreqOhNWhi5S7tqMLfvVnqp-LC=s88-c-k-c0x00ffffff-no-rj',
        width: 88,
        height: 88,
      },
      medium: {
        url: 'https://yt3.ggpht.com/WnnbIil6FaFBK5mrQ5AP0-IhfYYuY7sUe8DAeVCRGnP1KlIreqOhNWhi5S7tqMLfvVnqp-LC=s240-c-k-c0x00ffffff-no-rj',
        width: 240,
        height: 240,
      },
      high: {
        url: 'https://yt3.ggpht.com/WnnbIil6FaFBK5mrQ5AP0-IhfYYuY7sUe8DAeVCRGnP1KlIreqOhNWhi5S7tqMLfvVnqp-LC=s800-c-k-c0x00ffffff-no-rj',
        width: 800,
        height: 800,
      },
    },
    videoPictures: {
      default: {
        url: 'https://i.ytimg.com/vi/oIgAbDaFzLQ/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/oIgAbDaFzLQ/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/oIgAbDaFzLQ/hqdefault.jpg',
        width: 480,
        height: 360,
      },
    },
    title:
      '¡Peligroso caimán se atasca en las alcantarillas! | Guardianes de Texas | Animal Planet',
    date: '2021-07-03T19:45:03Z',
  },
  {
    id: 'jCmozCghmsU',
    channelName: 'Noticias Telemundo',
    channelPictures: {
      default: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqPv3bDDxS2YJtharBhZCBlwUdh1KBB3ZcuncbJAQA=s88-c-k-c0x00ffffff-no-rj',
        width: 88,
        height: 88,
      },
      medium: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqPv3bDDxS2YJtharBhZCBlwUdh1KBB3ZcuncbJAQA=s240-c-k-c0x00ffffff-no-rj',
        width: 240,
        height: 240,
      },
      high: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqPv3bDDxS2YJtharBhZCBlwUdh1KBB3ZcuncbJAQA=s800-c-k-c0x00ffffff-no-rj',
        width: 800,
        height: 800,
      },
    },
    videoPictures: {
      default: {
        url: 'https://i.ytimg.com/vi/jCmozCghmsU/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/jCmozCghmsU/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/jCmozCghmsU/hqdefault.jpg',
        width: 480,
        height: 360,
      },
    },
    title:
      'Llaman &quot;hereje&quot; al papa Francisco durante su viaje a Grecia | Noticias Telemundo',
    date: '2021-12-05T00:50:20Z',
  },
  {
    id: 'cws9LVbcn2s',
    channelName: 'TUDN México',
    channelPictures: {
      default: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqNpOVOJ1cbgqtUedt08NQRHNCcJZKlrUzvzk_kphg=s88-c-k-c0x00ffffff-no-rj',
        width: 88,
        height: 88,
      },
      medium: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqNpOVOJ1cbgqtUedt08NQRHNCcJZKlrUzvzk_kphg=s240-c-k-c0x00ffffff-no-rj',
        width: 240,
        height: 240,
      },
      high: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqNpOVOJ1cbgqtUedt08NQRHNCcJZKlrUzvzk_kphg=s800-c-k-c0x00ffffff-no-rj',
        width: 800,
        height: 800,
      },
    },
    videoPictures: {
      default: {
        url: 'https://i.ytimg.com/vi/cws9LVbcn2s/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/cws9LVbcn2s/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/cws9LVbcn2s/hqdefault.jpg',
        width: 480,
        height: 360,
      },
    },
    title:
      '¡INCREÍBLE! Moreno detuvo el penal de México | Guatemala 1-1 México | CONCACAF Sub 20 | TUDN',
    date: '2022-06-30T03:56:57Z',
  },
  {
    id: 'SM_8vxMNFRg',
    channelName: 'Gelo',
    channelPictures: {
      default: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqOTIuBXhzRsnfe2ZVlW9m7YmU6WPCMUssYJo6-cfQ=s88-c-k-c0x00ffffff-no-rj',
        width: 88,
        height: 88,
      },
      medium: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqOTIuBXhzRsnfe2ZVlW9m7YmU6WPCMUssYJo6-cfQ=s240-c-k-c0x00ffffff-no-rj',
        width: 240,
        height: 240,
      },
      high: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqOTIuBXhzRsnfe2ZVlW9m7YmU6WPCMUssYJo6-cfQ=s800-c-k-c0x00ffffff-no-rj',
        width: 800,
        height: 800,
      },
    },
    videoPictures: {
      default: {
        url: 'https://i.ytimg.com/vi/SM_8vxMNFRg/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/SM_8vxMNFRg/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/SM_8vxMNFRg/hqdefault.jpg',
        width: 480,
        height: 360,
      },
    },
    title: 'Cosas que tienen un USO SECRETO en Minecraft - PARTE 10',
    date: '2022-01-21T21:00:20Z',
  },
  {
    id: 'Bibat_oLp2g',
    channelName: 'Motion Station',
    channelPictures: {
      default: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqO-MrfVUPN7OvrLz8RdpwB4Z8mnZc5W2LdoJE032w=s88-c-k-c0x00ffffff-no-rj',
        width: 88,
        height: 88,
      },
      medium: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqO-MrfVUPN7OvrLz8RdpwB4Z8mnZc5W2LdoJE032w=s240-c-k-c0x00ffffff-no-rj',
        width: 240,
        height: 240,
      },
      high: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqO-MrfVUPN7OvrLz8RdpwB4Z8mnZc5W2LdoJE032w=s800-c-k-c0x00ffffff-no-rj',
        width: 800,
        height: 800,
      },
    },
    videoPictures: {
      default: {
        url: 'https://i.ytimg.com/vi/Bibat_oLp2g/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/Bibat_oLp2g/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/Bibat_oLp2g/hqdefault.jpg',
        width: 480,
        height: 360,
      },
    },
    title: 'Game Recap: Warriors 102, Nuggets 98',
    date: '2022-04-28T06:13:37Z',
  },
  {
    id: 'Xj0awOYnEfQ',
    channelName: 'Marilú Y Los Niños - Escuela Dominical',
    channelPictures: {
      default: {
        url: 'https://yt3.ggpht.com/HMMdmW2ewK4BqMx24F912wZnTkmiuXpa5aoSejIJWbWV6xjL07LiDKkOhcyN3Uf6Tv--cjOK=s88-c-k-c0x00ffffff-no-rj',
        width: 88,
        height: 88,
      },
      medium: {
        url: 'https://yt3.ggpht.com/HMMdmW2ewK4BqMx24F912wZnTkmiuXpa5aoSejIJWbWV6xjL07LiDKkOhcyN3Uf6Tv--cjOK=s240-c-k-c0x00ffffff-no-rj',
        width: 240,
        height: 240,
      },
      high: {
        url: 'https://yt3.ggpht.com/HMMdmW2ewK4BqMx24F912wZnTkmiuXpa5aoSejIJWbWV6xjL07LiDKkOhcyN3Uf6Tv--cjOK=s800-c-k-c0x00ffffff-no-rj',
        width: 800,
        height: 800,
      },
    },
    videoPictures: {
      default: {
        url: 'https://i.ytimg.com/vi/Xj0awOYnEfQ/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/Xj0awOYnEfQ/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/Xj0awOYnEfQ/hqdefault.jpg',
        width: 480,
        height: 360,
      },
    },
    title: '4 ESTRATEGIAS PARA ENSEÑANZAS BÍBLICAS PARA NIÑOS - Marilú y Los Niños',
    date: '2020-08-25T17:11:28Z',
  },
  {
    id: 'RgGeMAx50nE',
    channelName: 'Noticias Telemundo',
    channelPictures: {
      default: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqPv3bDDxS2YJtharBhZCBlwUdh1KBB3ZcuncbJAQA=s88-c-k-c0x00ffffff-no-rj',
        width: 88,
        height: 88,
      },
      medium: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqPv3bDDxS2YJtharBhZCBlwUdh1KBB3ZcuncbJAQA=s240-c-k-c0x00ffffff-no-rj',
        width: 240,
        height: 240,
      },
      high: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqPv3bDDxS2YJtharBhZCBlwUdh1KBB3ZcuncbJAQA=s800-c-k-c0x00ffffff-no-rj',
        width: 800,
        height: 800,
      },
    },
    videoPictures: {
      default: {
        url: 'https://i.ytimg.com/vi/RgGeMAx50nE/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/RgGeMAx50nE/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/RgGeMAx50nE/hqdefault.jpg',
        width: 480,
        height: 360,
      },
    },
    title: 'Una tormenta invernal deja al menos tres heridos en Nevada | Noticias Telemundo',
    date: '2021-12-27T13:34:04Z',
  },
  {
    id: 'fJrsfDtbNrI',
    channelName: 'Noticias Telemundo',
    channelPictures: {
      default: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqPv3bDDxS2YJtharBhZCBlwUdh1KBB3ZcuncbJAQA=s88-c-k-c0x00ffffff-no-rj',
        width: 88,
        height: 88,
      },
      medium: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqPv3bDDxS2YJtharBhZCBlwUdh1KBB3ZcuncbJAQA=s240-c-k-c0x00ffffff-no-rj',
        width: 240,
        height: 240,
      },
      high: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqPv3bDDxS2YJtharBhZCBlwUdh1KBB3ZcuncbJAQA=s800-c-k-c0x00ffffff-no-rj',
        width: 800,
        height: 800,
      },
    },
    videoPictures: {
      default: {
        url: 'https://i.ytimg.com/vi/fJrsfDtbNrI/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/fJrsfDtbNrI/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/fJrsfDtbNrI/hqdefault.jpg',
        width: 480,
        height: 360,
      },
    },
    title: 'Reportan repoblación exitosa de tortugas en los Galápagos | Noticias Telemundo',
    date: '2022-07-18T15:01:49Z',
  },
  {
    id: 'uAZGxAdVPb4',
    channelName: 'Exatlón México',
    channelPictures: {
      default: {
        url: 'https://yt3.ggpht.com/9_SHerfn-GzdPPyHG9cAf2mmRn0R1SFhQ4E7Qe8HA28tm-VjoVA1ikQ1fJbExRywjFosjUTFiw=s88-c-k-c0x00ffffff-no-rj',
        width: 88,
        height: 88,
      },
      medium: {
        url: 'https://yt3.ggpht.com/9_SHerfn-GzdPPyHG9cAf2mmRn0R1SFhQ4E7Qe8HA28tm-VjoVA1ikQ1fJbExRywjFosjUTFiw=s240-c-k-c0x00ffffff-no-rj',
        width: 240,
        height: 240,
      },
      high: {
        url: 'https://yt3.ggpht.com/9_SHerfn-GzdPPyHG9cAf2mmRn0R1SFhQ4E7Qe8HA28tm-VjoVA1ikQ1fJbExRywjFosjUTFiw=s800-c-k-c0x00ffffff-no-rj',
        width: 800,
        height: 800,
      },
    },
    videoPictures: {
      default: {
        url: 'https://i.ytimg.com/vi/uAZGxAdVPb4/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/uAZGxAdVPb4/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/uAZGxAdVPb4/hqdefault.jpg',
        width: 480,
        height: 360,
      },
    },
    title: 'Avance Exatlón, capítulo 79. | Domingo de Eliminación. | Exatlón México',
    date: '2021-12-03T04:33:01Z',
  },
  {
    id: 'l714SCNHBME',
    channelName: 'What If',
    channelPictures: {
      default: {
        url: 'https://yt3.ggpht.com/JU70Nk6-XAKJzrYFZVWiu2SIOy9VxMz2oYL0eZgWycpJ5SYcn7MoAROh-kDAUFaDbxNf9O4Htw=s88-c-k-c0x00ffffff-no-rj',
        width: 88,
        height: 88,
      },
      medium: {
        url: 'https://yt3.ggpht.com/JU70Nk6-XAKJzrYFZVWiu2SIOy9VxMz2oYL0eZgWycpJ5SYcn7MoAROh-kDAUFaDbxNf9O4Htw=s240-c-k-c0x00ffffff-no-rj',
        width: 240,
        height: 240,
      },
      high: {
        url: 'https://yt3.ggpht.com/JU70Nk6-XAKJzrYFZVWiu2SIOy9VxMz2oYL0eZgWycpJ5SYcn7MoAROh-kDAUFaDbxNf9O4Htw=s800-c-k-c0x00ffffff-no-rj',
        width: 800,
        height: 800,
      },
    },
    videoPictures: {
      default: {
        url: 'https://i.ytimg.com/vi/l714SCNHBME/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/l714SCNHBME/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/l714SCNHBME/hqdefault.jpg',
        width: 480,
        height: 360,
      },
    },
    title: 'What If You Were Attacked by a Bear?',
    date: '2022-02-22T16:00:33Z',
  },
  {
    id: 'uANrQZfrafs',
    channelName: 'DW Español',
    channelPictures: {
      default: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqMWu-K2YYzOuCD6LbIeo6HHGnVGn-KaTq9OZcmF=s88-c-k-c0x00ffffff-no-rj',
        width: 88,
        height: 88,
      },
      medium: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqMWu-K2YYzOuCD6LbIeo6HHGnVGn-KaTq9OZcmF=s240-c-k-c0x00ffffff-no-rj',
        width: 240,
        height: 240,
      },
      high: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqMWu-K2YYzOuCD6LbIeo6HHGnVGn-KaTq9OZcmF=s800-c-k-c0x00ffffff-no-rj',
        width: 800,
        height: 800,
      },
    },
    videoPictures: {
      default: {
        url: 'https://i.ytimg.com/vi/uANrQZfrafs/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/uANrQZfrafs/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/uANrQZfrafs/hqdefault.jpg',
        width: 480,
        height: 360,
      },
    },
    title: 'No ceden las protestas contra Giammattei',
    date: '2020-11-29T18:40:16Z',
  },
  {
    id: 'a5h7GLEolhQ',
    channelName: 'Profe Richard',
    channelPictures: {
      default: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqNWVaPj06N08wDd7EL26q1fT0rQlVgjA6K8vgFo=s88-c-k-c0x00ffffff-no-rj',
        width: 88,
        height: 88,
      },
      medium: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqNWVaPj06N08wDd7EL26q1fT0rQlVgjA6K8vgFo=s240-c-k-c0x00ffffff-no-rj',
        width: 240,
        height: 240,
      },
      high: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqNWVaPj06N08wDd7EL26q1fT0rQlVgjA6K8vgFo=s800-c-k-c0x00ffffff-no-rj',
        width: 800,
        height: 800,
      },
    },
    videoPictures: {
      default: {
        url: 'https://i.ytimg.com/vi/a5h7GLEolhQ/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/a5h7GLEolhQ/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/a5h7GLEolhQ/hqdefault.jpg',
        width: 480,
        height: 360,
      },
    },
    title: '✅👉 Como Dividir por 1 Cifra y 3 Dividendo',
    date: '2022-04-18T20:00:00Z',
  },
  {
    id: 'yBx0i2-IXPM',
    channelName: 'NMás',
    channelPictures: {
      default: {
        url: 'https://yt3.ggpht.com/rLmW43Zq8QoI0rbyjN6r2jD495KTIYzmCtznYzSLQ0b-9dhR8YLtgsw3jvrNqgOCYCzoV-p-bA=s88-c-k-c0x00ffffff-no-rj',
        width: 88,
        height: 88,
      },
      medium: {
        url: 'https://yt3.ggpht.com/rLmW43Zq8QoI0rbyjN6r2jD495KTIYzmCtznYzSLQ0b-9dhR8YLtgsw3jvrNqgOCYCzoV-p-bA=s240-c-k-c0x00ffffff-no-rj',
        width: 240,
        height: 240,
      },
      high: {
        url: 'https://yt3.ggpht.com/rLmW43Zq8QoI0rbyjN6r2jD495KTIYzmCtznYzSLQ0b-9dhR8YLtgsw3jvrNqgOCYCzoV-p-bA=s800-c-k-c0x00ffffff-no-rj',
        width: 800,
        height: 800,
      },
    },
    videoPictures: {
      default: {
        url: 'https://i.ytimg.com/vi/yBx0i2-IXPM/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/yBx0i2-IXPM/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/yBx0i2-IXPM/hqdefault.jpg',
        width: 480,
        height: 360,
      },
    },
    title: 'Atacan a balazos al presidente de Guatemala; salió ileso - Las Noticias',
    date: '2022-07-30T23:14:24Z',
  },
  {
    id: '2WELKCBWXlY',
    channelName: 'Rebeca Lane',
    channelPictures: {
      default: {
        url: 'https://yt3.ggpht.com/HuUWTmnUNkCpvwbaXRuEVMw5ZjPGCDfK99WR4gYkkXVP6SYDlnOTbgPcVinRzT3tEx59xuAQ=s88-c-k-c0x00ffffff-no-nd-rj',
        width: 88,
        height: 88,
      },
      medium: {
        url: 'https://yt3.ggpht.com/HuUWTmnUNkCpvwbaXRuEVMw5ZjPGCDfK99WR4gYkkXVP6SYDlnOTbgPcVinRzT3tEx59xuAQ=s240-c-k-c0x00ffffff-no-nd-rj',
        width: 240,
        height: 240,
      },
      high: {
        url: 'https://yt3.ggpht.com/HuUWTmnUNkCpvwbaXRuEVMw5ZjPGCDfK99WR4gYkkXVP6SYDlnOTbgPcVinRzT3tEx59xuAQ=s800-c-k-c0x00ffffff-no-nd-rj',
        width: 800,
        height: 800,
      },
    },
    videoPictures: {
      default: {
        url: 'https://i.ytimg.com/vi/2WELKCBWXlY/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/2WELKCBWXlY/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/2WELKCBWXlY/hqdefault.jpg',
        width: 480,
        height: 360,
      },
    },
    title: 'Flores Rojas - Rebeca Lane (video oficial)',
    date: '2022-02-18T02:00:11Z',
  },
  {
    id: 'PEG9yZ3_x88',
    channelName: 'Concacaf',
    channelPictures: {
      default: {
        url: 'https://yt3.ggpht.com/xgIlNx4XqsB2oqOFGHqLGqzI7p1MEbKogUTaluZ99FUCpQE3BXQvnqSsWWil6X_Bo6DobAhp=s88-c-k-c0x00ffffff-no-rj',
        width: 88,
        height: 88,
      },
      medium: {
        url: 'https://yt3.ggpht.com/xgIlNx4XqsB2oqOFGHqLGqzI7p1MEbKogUTaluZ99FUCpQE3BXQvnqSsWWil6X_Bo6DobAhp=s240-c-k-c0x00ffffff-no-rj',
        width: 240,
        height: 240,
      },
      high: {
        url: 'https://yt3.ggpht.com/xgIlNx4XqsB2oqOFGHqLGqzI7p1MEbKogUTaluZ99FUCpQE3BXQvnqSsWWil6X_Bo6DobAhp=s800-c-k-c0x00ffffff-no-rj',
        width: 800,
        height: 800,
      },
    },
    videoPictures: {
      default: {
        url: 'https://i.ytimg.com/vi/PEG9yZ3_x88/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/PEG9yZ3_x88/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/PEG9yZ3_x88/hqdefault.jpg',
        width: 480,
        height: 360,
      },
    },
    title: 'CNL 2022 Resumen | Guatemala vs República Dominicana',
    date: '2022-06-14T03:33:12Z',
  },
  {
    id: 'HS5PbiOt1Mk',
    channelName: 'Woody Woodpecker',
    channelPictures: {
      default: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqPnAwTs7U9NIeCZ02Di18zrfRxvmyCW8YUMWeVdNQ=s88-c-k-c0x00ffffff-no-rj',
        width: 88,
        height: 88,
      },
      medium: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqPnAwTs7U9NIeCZ02Di18zrfRxvmyCW8YUMWeVdNQ=s240-c-k-c0x00ffffff-no-rj',
        width: 240,
        height: 240,
      },
      high: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqPnAwTs7U9NIeCZ02Di18zrfRxvmyCW8YUMWeVdNQ=s800-c-k-c0x00ffffff-no-rj',
        width: 800,
        height: 800,
      },
    },
    videoPictures: {
      default: {
        url: 'https://i.ytimg.com/vi/HS5PbiOt1Mk/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/HS5PbiOt1Mk/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/HS5PbiOt1Mk/hqdefault.jpg',
        width: 480,
        height: 360,
      },
    },
    title: 'Woody Woodpecker ⚽️ Woody Invades the Pitch! ⚽️ Full Episode',
    date: '2021-02-28T15:00:12Z',
  },
  {
    id: 'G74kyEZlJzg',
    channelName: 'ESPN Deportes',
    channelPictures: {
      default: {
        url: 'https://yt3.ggpht.com/Nc__C3VMt7TvZ2zBcdB8B3YBYtrSB-hqBbp4lPbaloUUjvzyP9xyv3AqYWH1jx5J2T9f9wk-Xw=s88-c-k-c0x00ffffff-no-rj',
        width: 88,
        height: 88,
      },
      medium: {
        url: 'https://yt3.ggpht.com/Nc__C3VMt7TvZ2zBcdB8B3YBYtrSB-hqBbp4lPbaloUUjvzyP9xyv3AqYWH1jx5J2T9f9wk-Xw=s240-c-k-c0x00ffffff-no-rj',
        width: 240,
        height: 240,
      },
      high: {
        url: 'https://yt3.ggpht.com/Nc__C3VMt7TvZ2zBcdB8B3YBYtrSB-hqBbp4lPbaloUUjvzyP9xyv3AqYWH1jx5J2T9f9wk-Xw=s800-c-k-c0x00ffffff-no-rj',
        width: 800,
        height: 800,
      },
    },
    videoPictures: {
      default: {
        url: 'https://i.ytimg.com/vi/G74kyEZlJzg/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/G74kyEZlJzg/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/G74kyEZlJzg/hqdefault.jpg',
        width: 480,
        height: 360,
      },
    },
    title:
      'ESTALLARON en críticas contra Tata Martino por la GOLEADA de Uruguay sobre México | Futbol Picante',
    date: '2022-06-03T05:06:19Z',
  },
  {
    id: '9Qk5cAC4yiI',
    channelName: 'Noticias Telemundo',
    channelPictures: {
      default: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqPv3bDDxS2YJtharBhZCBlwUdh1KBB3ZcuncbJAQA=s88-c-k-c0x00ffffff-no-rj',
        width: 88,
        height: 88,
      },
      medium: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqPv3bDDxS2YJtharBhZCBlwUdh1KBB3ZcuncbJAQA=s240-c-k-c0x00ffffff-no-rj',
        width: 240,
        height: 240,
      },
      high: {
        url: 'https://yt3.ggpht.com/ytc/AGIKgqPv3bDDxS2YJtharBhZCBlwUdh1KBB3ZcuncbJAQA=s800-c-k-c0x00ffffff-no-rj',
        width: 800,
        height: 800,
      },
    },
    videoPictures: {
      default: {
        url: 'https://i.ytimg.com/vi/9Qk5cAC4yiI/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/9Qk5cAC4yiI/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/9Qk5cAC4yiI/hqdefault.jpg',
        width: 480,
        height: 360,
      },
    },
    title: 'Quería luchar por su hijo pero murió en el camión de Texas | Noticias Telemundo',
    date: '2022-07-01T23:17:11Z',
  },
  {
    id: 'xd0rFSG1WIg',
    channelName: 'Fir SSJ',
    channelPictures: {
      default: {
        url: 'https://yt3.ggpht.com/uGfquUCafVDao1RiQoxU7PGvF-RRpYbxAYjpXU2AlcipAvVk7t31dmD-x2bhooGbP667SD1cVG8=s88-c-k-c0x00ffffff-no-rj',
        width: 88,
        height: 88,
      },
      medium: {
        url: 'https://yt3.ggpht.com/uGfquUCafVDao1RiQoxU7PGvF-RRpYbxAYjpXU2AlcipAvVk7t31dmD-x2bhooGbP667SD1cVG8=s240-c-k-c0x00ffffff-no-rj',
        width: 240,
        height: 240,
      },
      high: {
        url: 'https://yt3.ggpht.com/uGfquUCafVDao1RiQoxU7PGvF-RRpYbxAYjpXU2AlcipAvVk7t31dmD-x2bhooGbP667SD1cVG8=s800-c-k-c0x00ffffff-no-rj',
        width: 800,
        height: 800,
      },
    },
    videoPictures: {
      default: {
        url: 'https://i.ytimg.com/vi/xd0rFSG1WIg/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/xd0rFSG1WIg/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/xd0rFSG1WIg/hqdefault.jpg',
        width: 480,
        height: 360,
      },
    },
    title:
      'La realidad del vagabundo en Buena Pizza Gran Pizza 😢 #shorts #buenapizzagranpizza #pizza #gaming',
    date: '2023-04-07T19:00:32Z',
  },
  {
    id: 'Fpe52qiVF3E',
    channelName: 'Fir SSJ',
    channelPictures: {
      default: {
        url: 'https://yt3.ggpht.com/uGfquUCafVDao1RiQoxU7PGvF-RRpYbxAYjpXU2AlcipAvVk7t31dmD-x2bhooGbP667SD1cVG8=s88-c-k-c0x00ffffff-no-rj',
        width: 88,
        height: 88,
      },
      medium: {
        url: 'https://yt3.ggpht.com/uGfquUCafVDao1RiQoxU7PGvF-RRpYbxAYjpXU2AlcipAvVk7t31dmD-x2bhooGbP667SD1cVG8=s240-c-k-c0x00ffffff-no-rj',
        width: 240,
        height: 240,
      },
      high: {
        url: 'https://yt3.ggpht.com/uGfquUCafVDao1RiQoxU7PGvF-RRpYbxAYjpXU2AlcipAvVk7t31dmD-x2bhooGbP667SD1cVG8=s800-c-k-c0x00ffffff-no-rj',
        width: 800,
        height: 800,
      },
    },
    videoPictures: {
      default: {
        url: 'https://i.ytimg.com/vi/Fpe52qiVF3E/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/Fpe52qiVF3E/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/Fpe52qiVF3E/hqdefault.jpg',
        width: 480,
        height: 360,
      },
    },
    title: 'Mi destino es delicioso #pizza #buenapizzagranpizza  #humor #gaming',
    date: '2023-04-17T18:00:09Z',
  },
  {
    id: 'cczidyN_UBI',
    channelName: 'Las Estrellas',
    channelPictures: {
      default: {
        url: 'https://yt3.ggpht.com/mcJk5qIg2WXiIX-FSMiSWD-alqCj8fkMb8U4z25bcLL1y8hHol8h_8GGHeLAnNcaZZFkbdvhLg=s88-c-k-c0x00ffffff-no-rj',
        width: 88,
        height: 88,
      },
      medium: {
        url: 'https://yt3.ggpht.com/mcJk5qIg2WXiIX-FSMiSWD-alqCj8fkMb8U4z25bcLL1y8hHol8h_8GGHeLAnNcaZZFkbdvhLg=s240-c-k-c0x00ffffff-no-rj',
        width: 240,
        height: 240,
      },
      high: {
        url: 'https://yt3.ggpht.com/mcJk5qIg2WXiIX-FSMiSWD-alqCj8fkMb8U4z25bcLL1y8hHol8h_8GGHeLAnNcaZZFkbdvhLg=s800-c-k-c0x00ffffff-no-rj',
        width: 800,
        height: 800,
      },
    },
    videoPictures: {
      default: {
        url: 'https://i.ytimg.com/vi/cczidyN_UBI/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/cczidyN_UBI/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/cczidyN_UBI/hqdefault.jpg',
        width: 480,
        height: 360,
      },
    },
    title:
      'AVANCE C34: Fernanda le asegurará a Rafael que nunca podrán estar juntos| Este jueves | La Desalmada',
    date: '2021-08-19T18:28:52Z',
  },
  {
    id: '_f5p-SbbJzo',
    channelName: 'Las Estrellas',
    channelPictures: {
      default: {
        url: 'https://yt3.ggpht.com/mcJk5qIg2WXiIX-FSMiSWD-alqCj8fkMb8U4z25bcLL1y8hHol8h_8GGHeLAnNcaZZFkbdvhLg=s88-c-k-c0x00ffffff-no-rj',
        width: 88,
        height: 88,
      },
      medium: {
        url: 'https://yt3.ggpht.com/mcJk5qIg2WXiIX-FSMiSWD-alqCj8fkMb8U4z25bcLL1y8hHol8h_8GGHeLAnNcaZZFkbdvhLg=s240-c-k-c0x00ffffff-no-rj',
        width: 240,
        height: 240,
      },
      high: {
        url: 'https://yt3.ggpht.com/mcJk5qIg2WXiIX-FSMiSWD-alqCj8fkMb8U4z25bcLL1y8hHol8h_8GGHeLAnNcaZZFkbdvhLg=s800-c-k-c0x00ffffff-no-rj',
        width: 800,
        height: 800,
      },
    },
    videoPictures: {
      default: {
        url: 'https://i.ytimg.com/vi/_f5p-SbbJzo/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/_f5p-SbbJzo/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/_f5p-SbbJzo/hqdefault.jpg',
        width: 480,
        height: 360,
      },
    },
    title: 'AVANCE C63: Déborah despierta | Este miércoles | La Herencia',
    date: '2022-06-22T17:12:34Z',
  },
  {
    id: 'lgxaEbowblo',
    channelName: 'What If',
    channelPictures: {
      default: {
        url: 'https://yt3.ggpht.com/JU70Nk6-XAKJzrYFZVWiu2SIOy9VxMz2oYL0eZgWycpJ5SYcn7MoAROh-kDAUFaDbxNf9O4Htw=s88-c-k-c0x00ffffff-no-rj',
        width: 88,
        height: 88,
      },
      medium: {
        url: 'https://yt3.ggpht.com/JU70Nk6-XAKJzrYFZVWiu2SIOy9VxMz2oYL0eZgWycpJ5SYcn7MoAROh-kDAUFaDbxNf9O4Htw=s240-c-k-c0x00ffffff-no-rj',
        width: 240,
        height: 240,
      },
      high: {
        url: 'https://yt3.ggpht.com/JU70Nk6-XAKJzrYFZVWiu2SIOy9VxMz2oYL0eZgWycpJ5SYcn7MoAROh-kDAUFaDbxNf9O4Htw=s800-c-k-c0x00ffffff-no-rj',
        width: 800,
        height: 800,
      },
    },
    videoPictures: {
      default: {
        url: 'https://i.ytimg.com/vi/lgxaEbowblo/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/lgxaEbowblo/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/lgxaEbowblo/hqdefault.jpg',
        width: 480,
        height: 360,
      },
    },
    title: 'What If the Oceans Caught Fire?',
    date: '2022-01-12T16:00:23Z',
  },
];
function useCount(defaultValue) {
  const [count, setCount] = useState(defaultValue || 0);
  const next = () => setCount((val) => val + 1);
  return [count, next];
}
function useYoutubeApi() {
  const [result, setResult] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const [start, setStart] = useState(0);
  const [maxResults, setMaxResults] = useState();
  const [count, next] = useCount();
  useEffect(() => {
    if (!maxResults) {
      return;
    }
    setStart((str) => str + maxResults);
    setResult(items.slice(start, start + maxResults));
  }, [maxResults, count]);
  const callApi = async (max = 5) => {
    setResult(null);
    setError(null);
    setLoading(true);
    try {
      setMaxResults(max);
      next();
    } catch (ex) {
      setError({
        status: ex == null ? void 0 : ex.status,
        message: (ex == null ? void 0 : ex.statusText) ?? 'Ocurrió un error.',
      });
    } finally {
      setLoading(false);
    }
  };
  return {
    callApi,
    result,
    error,
    loading,
  };
}
const notificationItem = '_notificationItem_18nuj_1';
const notificationItemContainer = '_notificationItemContainer_18nuj_12';
const imageContainer$1 = '_imageContainer_18nuj_18';
const circle$2 = '_circle_18nuj_22';
const body = '_body_18nuj_37';
const miniatura = '_miniatura_18nuj_56';
const configButton = '_configButton_18nuj_67';
const styles$g = {
  notificationItem,
  notificationItemContainer,
  imageContainer: imageContainer$1,
  circle: circle$2,
  body,
  miniatura,
  configButton,
};
const notificationConfigMenu = '_notificationConfigMenu_m9t3b_1';
const styles$f = {
  notificationConfigMenu,
};
function NotificationConfigMenu({ chanelName }) {
  return /* @__PURE__ */ jsxs('div', {
    className: styles$f.notificationConfigMenu,
    children: [
      /* @__PURE__ */ jsx(MenuOptionItem, {
        title: 'Ocultar esta notificación',
        children: /* @__PURE__ */ jsx('svg', {
          display: 'block',
          pointerEvents: 'none',
          focusable: 'false',
          viewBox: '0 0 24 24',
          xmlns: 'http://www.w3.org/2000/svg',
          children: /* @__PURE__ */ jsx('g', {
            children: /* @__PURE__ */ jsx('path', {
              d: 'm3.85 3.15-0.7 0.7 3.04 3.05c-1.88 1.21-3.36 2.99-4.19 5.1 1.57 3.99 5.45 6.82 10 6.82 1.77 0 3.44-0.43 4.92-1.2l3.23 3.23 0.71-0.71-17.01-16.99zm9.95 11.35c-0.51 0.37-1.13 0.59-1.8 0.59-1.7 0-3.09-1.39-3.09-3.09 0-0.67 0.22-1.29 0.59-1.8l4.3 4.3zm-1.8 3.32c-3.9 0-7.35-2.27-8.92-5.82 0.82-1.87 2.18-3.36 3.83-4.38l1.88 1.88c-0.54 0.69-0.88 1.56-0.88 2.5 0 2.25 1.84 4.09 4.09 4.09 0.95 0 1.81-0.34 2.5-0.88l1.67 1.67c-1.27 0.61-2.69 0.94-4.17 0.94zm-0.51-9.87c0.17-0.02 0.34-0.05 0.51-0.05 2.25 0 4.09 1.84 4.09 4.09 0 0.17-0.02 0.34-0.05 0.51l-1.01-1.01c-0.21-1.31-1.24-2.33-2.55-2.55l-0.99-0.99zm-2.37-2.36c0.92-0.26 1.88-0.41 2.88-0.41 4.55 0 8.43 2.83 10 6.82-0.58 1.47-1.48 2.78-2.61 3.85l-0.72-0.72c0.93-0.87 1.71-1.92 2.25-3.13-1.57-3.55-5.02-5.82-8.92-5.82-0.7 0-1.39 0.08-2.06 0.22l-0.82-0.81z',
            }),
          }),
        }),
      }),
      /* @__PURE__ */ jsx(MenuOptionItem, { title: `No notificar nada de ${chanelName}` }),
    ],
  });
}
NotificationConfigMenu.propTypes = {
  chanelName: PropTypes.string.isRequired,
};
moment.locale('es');
function NotificationItem({
  channelPicture, title: title2, date, videoPicture, channelName,
}) {
  const [isConfigMenuVisible, toogleConfigMenuVisible] = useSwitch(false);
  const configMenuRef = useOutsideClick(toogleConfigMenuVisible, isConfigMenuVisible);
  return /* @__PURE__ */ jsxs('div', {
    className: styles$g.notificationItem,
    children: [
      /* @__PURE__ */ jsxs('a', {
        href: '/',
        className: styles$g.notificationItemContainer,
        children: [
          /* @__PURE__ */ jsxs('div', {
            className: styles$g.imageContainer,
            children: [
              /* @__PURE__ */ jsx('span', { className: styles$g.circle }),
              /* @__PURE__ */ jsx('img', {
                src: channelPicture,
                alt: 'perfil',
              }),
            ],
          }),
          /* @__PURE__ */ jsxs('div', {
            className: styles$g.body,
            children: [
              /* @__PURE__ */ jsx('h2', { children: `${channelName} ha subido ${title2}` }),
              /* @__PURE__ */ jsx('span', { children: moment(date).fromNow() }),
            ],
          }),
          /* @__PURE__ */ jsx('div', {
            className: styles$g.miniatura,
            children: /* @__PURE__ */ jsx('img', { src: videoPicture, alt: 'miniatura' }),
          }),
        ],
      }),
      /* @__PURE__ */ jsx(NavbarButton, {
        onClick: toogleConfigMenuVisible,
        subMenu:
          isConfigMenuVisible
          /* @__PURE__ */ && jsx(NotificationConfigMenu, { chanelName: channelName }),
        refProp: configMenuRef,
        className: styles$g.configButton,
        children: /* @__PURE__ */ jsx('svg', {
          display: 'block',
          pointerEvents: 'none',
          focusable: 'false',
          viewBox: '0 0 24 24',
          xmlns: 'http://www.w3.org/2000/svg',
          children: /* @__PURE__ */ jsx('g', {
            children: /* @__PURE__ */ jsx('path', {
              d: 'm12 16.5c0.83 0 1.5 0.67 1.5 1.5s-0.67 1.5-1.5 1.5-1.5-0.67-1.5-1.5 0.67-1.5 1.5-1.5zm-1.5-4.5c0 0.83 0.67 1.5 1.5 1.5s1.5-0.67 1.5-1.5-0.67-1.5-1.5-1.5-1.5 0.67-1.5 1.5zm0-6c0 0.83 0.67 1.5 1.5 1.5s1.5-0.67 1.5-1.5-0.67-1.5-1.5-1.5-1.5 0.67-1.5 1.5z',
            }),
          }),
        }),
      }),
    ],
  });
}
NotificationItem.propTypes = {
  channelPicture: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  videoPicture: PropTypes.string.isRequired,
  channelName: PropTypes.string.isRequired,
};
NotificationItem.defaultProps = {};
function NotificationsPanel() {
  const [notificationsList, setNotificationsList] = useState([]);
  const { callApi, result, error } = useYoutubeApi();
  useEffect(() => {
    callApi(5);
  }, []);
  useEffect(() => {
    if (!result) {
      return;
    }
    setNotificationsList((prev) => [...prev, ...result]);
  }, [result]);
  useEffect(() => {}, [error]);
  return /* @__PURE__ */ jsxs('div', {
    className: styles$h.notificationsPanel,
    children: [
      /* @__PURE__ */ jsxs('div', {
        className: styles$h.header,
        children: [
          /* @__PURE__ */ jsx('span', { children: 'Notificaciones' }),
          /* @__PURE__ */ jsx(NavbarButton, {
            title: 'Configuracion',
            children: /* @__PURE__ */ jsx('svg', {
              display: 'block',
              pointerEvents: 'none',
              focusable: 'false',
              viewBox: '0 0 24 24',
              xmlns: 'http://www.w3.org/2000/svg',
              children: /* @__PURE__ */ jsx('g', {
                children: /* @__PURE__ */ jsx('path', {
                  d: 'm12 9c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3m0-1c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm1.22-5 0.55 2.2 0.13 0.51 0.5 0.18c0.61 0.23 1.19 0.56 1.72 0.98l0.4 0.32 0.5-0.14 2.17-0.62 1.22 2.11-1.63 1.59-0.37 0.36 0.08 0.51c0.05 0.32 0.08 0.64 0.08 0.98s-0.03 0.66-0.08 0.98l-0.08 0.51 0.37 0.36 1.63 1.59-1.22 2.11-2.17-0.62-0.5-0.14-0.4 0.32c-0.53 0.43-1.11 0.76-1.72 0.98l-0.5 0.18-0.13 0.51-0.55 2.24h-2.44l-0.55-2.2-0.13-0.51-0.5-0.18c-0.6-0.23-1.18-0.56-1.72-0.99l-0.4-0.32-0.5 0.14-2.17 0.62-1.21-2.12 1.63-1.59 0.37-0.36-0.08-0.51c-0.05-0.32-0.08-0.65-0.08-0.98s0.03-0.66 0.08-0.98l0.08-0.51-0.37-0.36-1.63-1.59 1.22-2.11 2.17 0.62 0.5 0.14 0.4-0.32c0.53-0.44 1.11-0.77 1.72-0.99l0.5-0.18 0.13-0.51 0.54-2.21h2.44m0.78-1h-4l-0.74 2.96c-0.73 0.27-1.4 0.66-2 1.14l-2.92-0.83-2 3.46 2.19 2.13c-0.06 0.37-0.09 0.75-0.09 1.14s0.03 0.77 0.09 1.14l-2.19 2.13 2 3.46 2.92-0.83c0.6 0.48 1.27 0.87 2 1.14l0.74 2.96h4l0.74-2.96c0.73-0.27 1.4-0.66 2-1.14l2.92 0.83 2-3.46-2.19-2.13c0.06-0.37 0.09-0.75 0.09-1.14s-0.03-0.77-0.09-1.14l2.19-2.13-2-3.46-2.92 0.83c-0.6-0.48-1.27-0.87-2-1.14l-0.74-2.96z',
                }),
              }),
            }),
          }),
        ],
      }),
      notificationsList.length === 0
      /* @__PURE__ */ && jsx('div', {
        className: styles$h.initialLoading,
        children: /* @__PURE__ */ jsx(Spinner, { className: styles$h.spinner }),
      }),
      notificationsList.length > 0
      /* @__PURE__ */ && jsx('div', {
        className: styles$h.notificationsContainer,
        children: notificationsList.map((notif) =>
        /* @__PURE__ */ jsx(NotificationItem, {
            channelName: notif.channelName,
            channelPicture: notif.channelPictures.default.url,
            videoPicture: notif.videoPictures.default.url,
            title: notif.title,
            date: notif.date,
          })),
      }),
    ],
  });
}
NotificationsPanel.propTypes = {};
NotificationsPanel.defaultProps = {};
function NotificationsButton() {
  const [selected2, toogleSelected] = useSwitch(false);
  const panelRef = useOutsideClick(toogleSelected, selected2);
  return /* @__PURE__ */ jsx(NavbarButton, {
    onClick: toogleSelected,
    title: 'Notificaciones',
    refProp: panelRef,
    subMenu: selected2 && /* @__PURE__ */ jsx(NotificationsPanel, {}),
    children: !selected2
      ? /* @__PURE__ */ jsx('svg', {
        display: 'block',
        focusable: 'false',
        viewBox: '0 0 24 24',
        xmlns: 'http://www.w3.org/2000/svg',
        children: /* @__PURE__ */ jsx('g', {
          children: /* @__PURE__ */ jsx('path', {
            d: 'm10 20h4c0 1.1-0.9 2-2 2s-2-0.9-2-2zm10-2.65v1.65h-16v-1.65l2-1.88v-5.15c0-2.92 1.56-5.22 4-5.98v-0.38c0-1.42 1.49-2.5 2.99-1.76 0.65 0.32 1.01 1.03 1.01 1.76v0.39c2.44 0.75 4 3.06 4 5.98v5.15l2 1.87zm-1 0.42-2-1.88v-5.47c0-2.47-1.19-4.36-3.13-5.1-1.26-0.53-2.64-0.5-3.84 0.03-1.88 0.76-3.03 2.64-3.03 5.07v5.47l-2 1.88v0.23h14v-0.23z',
          }),
        }),
      })
      : /* @__PURE__ */ jsx('svg', {
        display: 'block',
        focusable: 'false',
        viewBox: '0 0 24 24',
        xmlns: 'http://www.w3.org/2000/svg',
        children: /* @__PURE__ */ jsx('g', {
          children: /* @__PURE__ */ jsx('path', {
            d: 'm10 20h4c0 1.1-0.9 2-2 2s-2-0.9-2-2zm10-2.65v1.65h-16v-1.65l2-1.88v-5.15c0-2.92 1.56-5.22 4-5.98v-0.38c0-1.42 1.49-2.5 2.99-1.76 0.65 0.32 1.01 1.03 1.01 1.76v0.39c2.44 0.75 4 3.06 4 5.98v5.15l2 1.87z',
          }),
        }),
      }),
  });
}
const profile = '_profile_1uwu1_1';
const styles$e = {
  profile,
};
const profileMenu = '_profileMenu_1igu8_1';
const menuHeader = '_menuHeader_1igu8_16';
const profileImage = '_profileImage_1igu8_22';
const headerData = '_headerData_1igu8_36';
const noMarginHr = '_noMarginHr_1igu8_58';
const optionsContainer = '_optionsContainer_1igu8_62';
const styles$d = {
  profileMenu,
  menuHeader,
  profileImage,
  headerData,
  noMarginHr,
  optionsContainer,
};
const line = '_line_1b4du_1';
const styles$c = {
  line,
};
function MenuHr({ className }) {
  return /* @__PURE__ */ jsx('hr', { className: `${styles$c.line} ${className}` });
}
MenuHr.propTypes = {
  className: PropTypes.string,
};
MenuHr.defaultProps = {
  className: '',
};
function ProfileMenu() {
  return /* @__PURE__ */ jsxs('div', {
    className: styles$d.profileMenu,
    children: [
      /* @__PURE__ */ jsxs('div', {
        className: styles$d.menuHeader,
        children: [
          /* @__PURE__ */ jsx('div', { className: styles$d.profileImage, children: 'D' }),
          /* @__PURE__ */ jsxs('div', {
            className: styles$d.headerData,
            children: [
              /* @__PURE__ */ jsx('span', { children: 'Diego Morales' }),
              /* @__PURE__ */ jsx('span', { children: '@diegomorales9654' }),
              /* @__PURE__ */ jsx('a', { href: '/', children: 'Gestionar tu cuenta de Google' }),
            ],
          }),
        ],
      }),
      /* @__PURE__ */ jsx(MenuHr, { className: styles$d.noMarginHr }),
      /* @__PURE__ */ jsxs('div', {
        className: styles$d.optionsContainer,
        children: [
          /* @__PURE__ */ jsx(MenuOptionItem, {
            title: 'Tu canal',
            children: /* @__PURE__ */ jsx('svg', {
              className: 'style-scope yt-icon',
              display: 'block',
              pointerEvents: 'none',
              focusable: 'false',
              viewBox: '0 0 24 24',
              xmlns: 'http://www.w3.org/2000/svg',
              children: /* @__PURE__ */ jsx('g', {
                className: 'style-scope yt-icon',
                children: /* @__PURE__ */ jsx('path', {
                  className: 'style-scope yt-icon',
                  d: 'm3 3v18h18v-18h-18zm1.99 17c0.39-2.62 2.38-5.1 7.01-5.1s6.62 2.48 7.01 5.1h-14.02zm4.01-10c0-1.65 1.35-3 3-3s3 1.35 3 3-1.35 3-3 3-3-1.35-3-3zm3.72 3.93c1.86-0.34 3.28-1.97 3.28-3.93 0-2.21-1.79-4-4-4s-4 1.79-4 4c0 1.96 1.42 3.59 3.28 3.93-4.42 0.25-6.84 2.8-7.28 6v-15.93h16v15.93c-0.44-3.2-2.86-5.75-7.28-6z',
                }),
              }),
            }),
          }),
          /* @__PURE__ */ jsx(MenuOptionItem, {
            title: 'YouTube Studio',
            children: /* @__PURE__ */ jsx('svg', {
              className: 'style-scope yt-icon',
              display: 'block',
              pointerEvents: 'none',
              focusable: 'false',
              viewBox: '0 0 24 24',
              xmlns: 'http://www.w3.org/2000/svg',
              children: /* @__PURE__ */ jsx('g', {
                className: 'style-scope yt-icon',
                width: '24',
                height: '24',
                enableBackground: 'new 0 0 24 24',
                children: /* @__PURE__ */ jsx('path', {
                  className: 'style-scope yt-icon',
                  d: 'M10,9.35,15,12l-5,2.65ZM12,3a.73.73,0,0,0-.31.06L4.3,7.28A.79.79,0,0,0,4,7.8v8.4a.79.79,0,0,0,.3.52l7.39,4.22a.83.83,0,0,0,.62,0l7.39-4.22a.79.79,0,0,0,.3-.52V7.8a.79.79,0,0,0-.3-.52L12.31,3.06A.73.73,0,0,0,12,3m0-1a1.6,1.6,0,0,1,.8.19l7.4,4.22A1.77,1.77,0,0,1,21,7.8v8.4a1.77,1.77,0,0,1-.8,1.39l-7.4,4.22a1.78,1.78,0,0,1-1.6,0L3.8,17.59A1.77,1.77,0,0,1,3,16.2V7.8a1.77,1.77,0,0,1,.8-1.39l7.4-4.22A1.6,1.6,0,0,1,12,2Zm0,4a.42.42,0,0,0-.17,0l-4.7,2.8A.59.59,0,0,0,7,9.19V14.8a.65.65,0,0,0,.13.37l4.7,2.8A.42.42,0,0,0,12,18a.34.34,0,0,0,.17,0l4.7-2.81A.56.56,0,0,0,17,14.8V9.19a.62.62,0,0,0-.13-.37L12.17,6A.34.34,0,0,0,12,6m0-1a1.44,1.44,0,0,1,.69.17L17.39,8A1.46,1.46,0,0,1,18,9.19V14.8A1.46,1.46,0,0,1,17.39,16l-4.7,2.81A1.44,1.44,0,0,1,12,19a1.4,1.4,0,0,1-.68-.17L6.62,16A1.47,1.47,0,0,1,6,14.8V9.19A1.47,1.47,0,0,1,6.62,8l4.7-2.8A1.4,1.4,0,0,1,12,5Z',
                }),
              }),
            }),
          }),
          /* @__PURE__ */ jsx(MenuOptionItem, {
            title: 'Cambiar de cuenta',
            showArrow: true,
            children: /* @__PURE__ */ jsx('svg', {
              className: 'style-scope yt-icon',
              display: 'block',
              pointerEvents: 'none',
              focusable: 'false',
              viewBox: '0 0 24 24',
              xmlns: 'http://www.w3.org/2000/svg',
              children: /* @__PURE__ */ jsx('g', {
                className: 'style-scope yt-icon',
                children: /* @__PURE__ */ jsx('path', {
                  className: 'style-scope yt-icon',
                  d: 'M4,20h14v1H3V6h1V20z M6,3v15h15V3H6z M8.02,17c0.36-2.13,1.93-4.1,5.48-4.1s5.12,1.97,5.48,4.1H8.02z M11,8.5 C11,7.12,12.12,6,13.5,6S16,7.12,16,8.5c0,1.38-1.12,2.5-2.5,2.5S11,9.88,11,8.5z M14.21,11.93C15.8,11.6,17,10.19,17,8.5 C17,6.57,15.43,5,13.5,5S10,6.57,10,8.5c0,1.69,1.2,3.1,2.79,3.43c-3.48,0.26-5.4,2.42-5.78,5.07H7V4h13v13h-0.01 C19.61,14.35,17.68,12.19,14.21,11.93z',
                }),
              }),
            }),
          }),
          /* @__PURE__ */ jsx(MenuOptionItem, {
            title: 'Cerrar Sesión',
            children: /* @__PURE__ */ jsx('svg', {
              className: 'style-scope yt-icon',
              display: 'block',
              pointerEvents: 'none',
              focusable: 'false',
              viewBox: '0 0 24 24',
              xmlns: 'http://www.w3.org/2000/svg',
              children: /* @__PURE__ */ jsx('g', {
                className: 'style-scope yt-icon',
                children: /* @__PURE__ */ jsx('path', {
                  className: 'style-scope yt-icon',
                  d: 'M20,3v18H8v-1h11V4H8V3H20z M11.1,15.1l0.7,0.7l4.4-4.4l-4.4-4.4l-0.7,0.7l3.1,3.1H3v1h11.3L11.1,15.1z',
                }),
              }),
            }),
          }),
          /* @__PURE__ */ jsx(MenuHr, {}),
          /* @__PURE__ */ jsx(MenuOptionItem, {
            title: 'Compras y suscripciones',
            children: /* @__PURE__ */ jsx('svg', {
              className: 'style-scope yt-icon',
              display: 'block',
              pointerEvents: 'none',
              focusable: 'false',
              viewBox: '0 0 24 24',
              xmlns: 'http://www.w3.org/2000/svg',
              children: /* @__PURE__ */ jsx('g', {
                className: 'style-scope yt-icon',
                children: /* @__PURE__ */ jsx('path', {
                  className: 'style-scope yt-icon',
                  d: 'm12 3c4.96 0 9 4.04 9 9s-4.04 9-9 9-9-4.04-9-9 4.04-9 9-9m0-1c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0.45 8.95c-0.67-0.22-1.18-0.47-1.52-0.72-0.34-0.26-0.52-0.57-0.52-0.95 0-0.41 0.15-0.73 0.44-0.98s0.71-0.37 1.24-0.37c0.55 0 1.23 0.15 1.53 0.44 0.18 0.16 0.31 0.38 0.38 0.63h2c-0.07-0.46-0.26-0.88-0.49-1.27-0.33-0.55-0.78-0.98-1.37-1.28-0.35-0.18-0.73-0.28-1.14-0.36v-1.09h-2v1.12c-0.31 0.07-0.62 0.16-0.9 0.29-0.6 0.29-1.06 0.67-1.38 1.17-0.32 0.49-0.48 1.05-0.48 1.68 0 1.21 0.6 2.18 1.8 2.9 0.44 0.26 1.04 0.53 1.79 0.8s1.27 0.53 1.56 0.77 0.43 0.59 0.43 1.05c0 0.42-0.14 0.74-0.43 0.97s-0.69 0.35-1.21 0.35c-1.05 0-1.92-0.37-2.18-1.1h-2c0.08 0.42 0.22 0.81 0.44 1.16 0.35 0.57 0.86 1.02 1.52 1.35 0.33 0.16 0.67 0.28 1.04 0.37v1.12h2v-1.05c0.79-0.11 1.45-0.38 1.97-0.81 0.69-0.57 1.03-1.37 1.03-2.38 0-0.91-0.28-1.67-0.85-2.28s-1.46-1.12-2.7-1.53z',
                }),
              }),
            }),
          }),
          /* @__PURE__ */ jsx(MenuOptionItem, {
            title: 'Tus datos en YouTube',
            children: /* @__PURE__ */ jsx('svg', {
              className: 'style-scope yt-icon',
              display: 'block',
              pointerEvents: 'none',
              focusable: 'false',
              viewBox: '0 0 24 24',
              xmlns: 'http://www.w3.org/2000/svg',
              children: /* @__PURE__ */ jsx('g', {
                className: 'style-scope yt-icon',
                children: /* @__PURE__ */ jsx('path', {
                  className: 'style-scope yt-icon',
                  d: 'm12 3.06 7 3.21v4.84c0 1.3-0.25 2.6-0.75 3.86-0.15 0.37-0.33 0.76-0.55 1.17-0.15 0.27-0.31 0.54-0.48 0.81-1.32 2.01-3.17 3.42-5.23 3.98-2.06-0.56-3.91-1.97-5.23-3.98-0.17-0.27-0.33-0.54-0.48-0.81-0.22-0.41-0.4-0.79-0.55-1.17-0.48-1.26-0.73-2.56-0.73-3.86v-4.84l7-3.21m0-1.1-8 3.67v5.49c0 1.47 0.3 2.9 0.81 4.22 0.17 0.44 0.37 0.86 0.6 1.28 0.16 0.3 0.34 0.6 0.52 0.88 1.42 2.17 3.52 3.82 5.95 4.44l0.12 0.02 0.12-0.03c2.43-0.61 4.53-2.26 5.95-4.43 0.19-0.29 0.36-0.58 0.52-0.88 0.22-0.41 0.43-0.84 0.6-1.28 0.51-1.33 0.81-2.76 0.81-4.23v-5.48l-8-3.67zm1.08 10.15c-0.32-0.06-0.64-0.11-0.96-0.12 1.6-0.07 2.88-1.37 2.88-2.99 0-1.66-1.34-3-3-3s-3 1.34-3 3c0 1.62 1.28 2.92 2.88 2.99-0.32 0.01-0.64 0.06-0.96 0.12-2.28 0.47-3.92 2.51-3.92 4.89h10c0-2.38-1.64-4.42-3.92-4.89zm-3.08-3.11c0-1.1 0.9-2 2-2s2 0.9 2 2-0.9 2-2 2-2-0.9-2-2zm1.12 4.09c0.37-0.08 0.64-0.11 0.88-0.11s0.51 0.03 0.88 0.11c1.48 0.3 2.63 1.46 3 2.91h-7.76c0.37-1.45 1.52-2.61 3-2.91z',
                }),
              }),
            }),
          }),
          /* @__PURE__ */ jsx(MenuHr, {}),
          /* @__PURE__ */ jsx(MenuOptionItem, {
            title: 'Aspecto: oscuro',
            showArrow: true,
            children: /* @__PURE__ */ jsx('svg', {
              viewBox: '0 0 24 24',
              preserveAspectRatio: 'xMidYMid meet',
              focusable: 'false',
              className: 'style-scope yt-icon',
              children: /* @__PURE__ */ jsx('g', {
                className: 'style-scope yt-icon',
                children: /* @__PURE__ */ jsx('path', {
                  d: 'M12 22C10.93 22 9.86998 21.83 8.83998 21.48L7.41998 21.01L8.83998 20.54C12.53 19.31 15 15.88 15 12C15 8.12 12.53 4.69 8.83998 3.47L7.41998 2.99L8.83998 2.52C9.86998 2.17 10.93 2 12 2C17.51 2 22 6.49 22 12C22 17.51 17.51 22 12 22ZM10.58 20.89C11.05 20.96 11.53 21 12 21C16.96 21 21 16.96 21 12C21 7.04 16.96 3 12 3C11.53 3 11.05 3.04 10.58 3.11C13.88 4.81 16 8.21 16 12C16 15.79 13.88 19.19 10.58 20.89Z',
                  className: 'style-scope yt-icon',
                }),
              }),
            }),
          }),
          /* @__PURE__ */ jsx(MenuOptionItem, {
            title: 'Idioma: Español',
            showArrow: true,
            children: /* @__PURE__ */ jsx('svg', {
              className: 'style-scope yt-icon',
              display: 'block',
              pointerEvents: 'none',
              focusable: 'false',
              viewBox: '0 0 24 24',
              xmlns: 'http://www.w3.org/2000/svg',
              children: /* @__PURE__ */ jsx('g', {
                className: 'style-scope yt-icon',
                children: /* @__PURE__ */ jsx('path', {
                  className: 'style-scope yt-icon',
                  d: 'm12.26 16.18-2.93-2.87c-0.8 0.86-1.64 1.71-2.48 2.54l-2.25 2.25-0.7-0.7 2.25-2.25c0.84-0.84 1.68-1.69 2.48-2.55-1.18-1.23-2.17-2.64-2.9-4.18v-0.02h1.14c0.65 1.26 1.47 2.43 2.44 3.45 1.59-1.81 2.89-3.69 3.43-5.7h-10.66v-1h6.65v-2.15h1v2.15h6.78v1h-2.73c-0.54 2.32-2.01 4.42-3.77 6.42l2.63 2.58c-0.13 0.35-0.25 0.67-0.38 1.03zm9.25 4.83h-0.95l-1.12-3.04h-4.91l-1.11 3.04h-0.96l4.09-10.81h0.87l4.09 10.81zm-2.36-3.81-2.17-5.89-2.17 5.89h4.34z',
                }),
              }),
            }),
          }),
          /* @__PURE__ */ jsx(MenuOptionItem, {
            title: 'Modo Restringido: desactivado',
            showArrow: true,
            children: /* @__PURE__ */ jsx('svg', {
              className: 'style-scope yt-icon',
              display: 'block',
              pointerEvents: 'none',
              focusable: 'false',
              viewBox: '0 0 24 24',
              xmlns: 'http://www.w3.org/2000/svg',
              children: /* @__PURE__ */ jsx('g', {
                className: 'style-scope yt-icon',
                children: /* @__PURE__ */ jsx('path', {
                  className: 'style-scope yt-icon',
                  d: 'm12 20.95q-3.025-0.875-5.013-3.638-1.987-2.762-1.987-6.212v-5.4l7-2.625 7 2.625v5.65q-0.225-0.075-0.5-0.15t-0.5-0.125v-4.7l-6-2.225-6 2.225v4.725q0 1.475 0.438 2.838 0.437 1.362 1.187 2.5 0.75 1.137 1.788 1.987 1.037 0.85 2.212 1.3l0.05-0.025q0.125 0.3 0.3 0.588 0.175 0.287 0.4 0.537-0.1 0.025-0.187 0.063-0.088 0.037-0.188 0.062zm5-3.95q0.625 0 1.062-0.438 0.438-0.437 0.438-1.062t-0.438-1.062q-0.437-0.438-1.062-0.438t-1.062 0.438q-0.438 0.437-0.438 1.062t0.438 1.062q0.437 0.438 1.062 0.438zm0 3q0.8 0 1.438-0.35 0.637-0.35 1.062-0.95-0.575-0.35-1.2-0.525t-1.3-0.175-1.3 0.175-1.2 0.525q0.425 0.6 1.062 0.95 0.638 0.35 1.438 0.35zm0 1q-1.675 0-2.837-1.163-1.163-1.162-1.163-2.837t1.163-2.838q1.162-1.162 2.837-1.162t2.837 1.162q1.163 1.163 1.163 2.838t-1.163 2.837q-1.162 1.163-2.837 1.163zm-5-9.05z',
                }),
              }),
            }),
          }),
          /* @__PURE__ */ jsx(MenuOptionItem, {
            title: 'Ubicación: Guatemala',
            showArrow: true,
            children: /* @__PURE__ */ jsx('svg', {
              className: 'style-scope yt-icon',
              display: 'block',
              pointerEvents: 'none',
              focusable: 'false',
              viewBox: '0 0 24 24',
              xmlns: 'http://www.w3.org/2000/svg',
              children: /* @__PURE__ */ jsx('g', {
                className: 'style-scope yt-icon',
                children: /* @__PURE__ */ jsx('path', {
                  className: 'style-scope yt-icon',
                  d: 'm11.99 1.98c-5.53 0-10.01 4.49-10.01 10.02s4.48 10.02 10.01 10.02c5.54 0 10.03-4.49 10.03-10.02s-4.49-10.02-10.03-10.02zm-3.13 12.52c-0.16-0.82-0.25-1.65-0.25-2.5 0-0.87 0.09-1.72 0.26-2.55h6.27c0.17 0.83 0.26 1.68 0.26 2.55 0 0.85-0.09 1.68-0.25 2.5h-6.29zm6.03 1c-0.54 1.89-1.52 3.64-2.89 5.15-1.37-1.5-2.35-3.25-2.89-5.15h5.78zm-5.77-7.05c0.54-1.87 1.52-3.61 2.88-5.1 1.36 1.49 2.34 3.22 2.88 5.1h-5.76zm7.03 1h4.5c0.24 0.81 0.37 1.66 0.37 2.55 0 0.87-0.13 1.71-0.36 2.5h-4.51c0.15-0.82 0.24-1.65 0.24-2.5 0-0.87-0.09-1.72-0.24-2.55zm4.14-1h-4.38c-0.53-1.97-1.47-3.81-2.83-5.4 3.25 0.4 5.96 2.51 7.21 5.4zm-9.37-5.4c-1.35 1.59-2.3 3.43-2.83 5.4h-4.38c1.24-2.9 3.96-5.01 7.21-5.4zm-7.57 6.4h4.5c-0.15 0.83-0.24 1.68-0.24 2.55 0 0.85 0.09 1.68 0.24 2.5h-4.51c-0.23-0.79-0.36-1.63-0.36-2.5 0-0.89 0.13-1.74 0.37-2.55zm0.34 6.05h4.39c0.52 1.99 1.48 3.85 2.84 5.45-3.27-0.39-6-2.53-7.23-5.45zm9.4 5.45c1.36-1.6 2.32-3.46 2.84-5.45h4.39c-1.24 2.92-3.97 5.05-7.23 5.45z',
                }),
              }),
            }),
          }),
          /* @__PURE__ */ jsx(MenuOptionItem, {
            title: 'Combinación de teclas',
            children: /* @__PURE__ */ jsx('svg', {
              viewBox: '0 0 24 24',
              preserveAspectRatio: 'xMidYMid meet',
              focusable: 'false',
              className: 'style-scope yt-icon',
              children: /* @__PURE__ */ jsx('g', {
                className: 'style-scope yt-icon',
                children: /* @__PURE__ */ jsx('path', {
                  d: 'M16,16H8v-2h8V16z M16,11h-2v2h2V11z M19,11h-2v2h2V11z M13,11h-2v2h2V11z M10,11H8v2h2V11z M7,11H5v2h2V11z M16,8h-2v2h2V8 z M19,8h-2v2h2V8z M13,8h-2v2h2V8z M10,8H8v2h2V8z M7,8H5v2h2V8z M22,5v14H2V5H22z M21,6H3v12h18V6z',
                  className: 'style-scope yt-icon',
                }),
              }),
            }),
          }),
          /* @__PURE__ */ jsx(MenuHr, {}),
          /* @__PURE__ */ jsx(MenuOptionItem, {
            title: 'Configuración',
            children: /* @__PURE__ */ jsx('svg', {
              className: 'style-scope yt-icon',
              display: 'block',
              pointerEvents: 'none',
              focusable: 'false',
              viewBox: '0 0 24 24',
              xmlns: 'http://www.w3.org/2000/svg',
              children: /* @__PURE__ */ jsx('g', {
                className: 'style-scope yt-icon',
                children: /* @__PURE__ */ jsx('path', {
                  className: 'style-scope yt-icon',
                  d: 'm12 9c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3m0-1c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm1.22-5 0.55 2.2 0.13 0.51 0.5 0.18c0.61 0.23 1.19 0.56 1.72 0.98l0.4 0.32 0.5-0.14 2.17-0.62 1.22 2.11-1.63 1.59-0.37 0.36 0.08 0.51c0.05 0.32 0.08 0.64 0.08 0.98s-0.03 0.66-0.08 0.98l-0.08 0.51 0.37 0.36 1.63 1.59-1.22 2.11-2.17-0.62-0.5-0.14-0.4 0.32c-0.53 0.43-1.11 0.76-1.72 0.98l-0.5 0.18-0.13 0.51-0.55 2.24h-2.44l-0.55-2.2-0.13-0.51-0.5-0.18c-0.6-0.23-1.18-0.56-1.72-0.99l-0.4-0.32-0.5 0.14-2.17 0.62-1.21-2.12 1.63-1.59 0.37-0.36-0.08-0.51c-0.05-0.32-0.08-0.65-0.08-0.98s0.03-0.66 0.08-0.98l0.08-0.51-0.37-0.36-1.63-1.59 1.22-2.11 2.17 0.62 0.5 0.14 0.4-0.32c0.53-0.44 1.11-0.77 1.72-0.99l0.5-0.18 0.13-0.51 0.54-2.21h2.44m0.78-1h-4l-0.74 2.96c-0.73 0.27-1.4 0.66-2 1.14l-2.92-0.83-2 3.46 2.19 2.13c-0.06 0.37-0.09 0.75-0.09 1.14s0.03 0.77 0.09 1.14l-2.19 2.13 2 3.46 2.92-0.83c0.6 0.48 1.27 0.87 2 1.14l0.74 2.96h4l0.74-2.96c0.73-0.27 1.4-0.66 2-1.14l2.92 0.83 2-3.46-2.19-2.13c0.06-0.37 0.09-0.75 0.09-1.14s-0.03-0.77-0.09-1.14l2.19-2.13-2-3.46-2.92 0.83c-0.6-0.48-1.27-0.87-2-1.14l-0.74-2.96z',
                }),
              }),
            }),
          }),
          /* @__PURE__ */ jsx(MenuHr, {}),
          /* @__PURE__ */ jsx(MenuOptionItem, {
            title: 'Ayuda',
            children: /* @__PURE__ */ jsx('svg', {
              className: 'style-scope yt-icon',
              display: 'block',
              pointerEvents: 'none',
              focusable: 'false',
              viewBox: '0 0 24 24',
              xmlns: 'http://www.w3.org/2000/svg',
              children: /* @__PURE__ */ jsx('g', {
                className: 'style-scope yt-icon',
                children: /* @__PURE__ */ jsx('path', {
                  className: 'style-scope yt-icon',
                  d: 'm15.36 9.96c0 1.09-0.67 1.67-1.31 2.24-0.53 0.47-1.03 0.9-1.16 1.6l-0.04 0.2h-1.75l0.03-0.28c0.14-1.17 0.8-1.76 1.47-2.27 0.52-0.4 1.01-0.77 1.01-1.49 0-0.51-0.23-0.97-0.63-1.29-0.4-0.31-0.92-0.42-1.42-0.29-0.59 0.15-1.05 0.67-1.19 1.34l-0.05 0.28h-1.75l0.06-0.42c0.2-1.4 1.15-2.53 2.42-2.87 1.05-0.29 2.14-0.08 2.98 0.57 0.85 0.64 1.33 1.62 1.33 2.68zm-3.36 8.04c0.55 0 1-0.45 1-1s-0.45-1-1-1-1 0.45-1 1 0.45 1 1 1zm0-15c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10-10-4.48-10-10 4.48-10 10-10z',
                }),
              }),
            }),
          }),
          /* @__PURE__ */ jsx(MenuOptionItem, {
            title: 'Enviar sugerencias',
            children: /* @__PURE__ */ jsx('svg', {
              viewBox: '0 0 24 24',
              preserveAspectRatio: 'xMidYMid meet',
              focusable: 'false',
              className: 'style-scope yt-icon',
              children: /* @__PURE__ */ jsx('g', {
                className: 'style-scope yt-icon',
                children: /* @__PURE__ */ jsx('path', {
                  d: 'M13,14h-2v-2h2V14z M13,5h-2v6h2V5z M19,3H5v16.59l3.29-3.29L8.59,16H9h10V3 M20,2v15H9l-5,5V2H20L20,2z',
                  className: 'style-scope yt-icon',
                }),
              }),
            }),
          }),
        ],
      }),
    ],
  });
}
function ProfileImage() {
  const [isMenuVisible, toogleVisible] = useSwitch(false);
  const menuRef = useOutsideClick(toogleVisible, isMenuVisible);
  return /* @__PURE__ */ jsxs('button', {
    type: 'button',
    className: styles$e.profile,
    ref: menuRef,
    onClick: toogleVisible,
    children: ['D', isMenuVisible && /* @__PURE__ */ jsx(ProfileMenu, {})],
  });
}
function Navbar({ menuClickHandler }) {
  return /* @__PURE__ */ jsxs('div', {
    className: styles$n.navbar,
    children: [
      /* @__PURE__ */ jsxs('div', {
        className: styles$n.buttonsContainer,
        children: [
          /* @__PURE__ */ jsx(MenuButton, { onClick: menuClickHandler }),
          /* @__PURE__ */ jsx(YoutubeLogo, {}),
        ],
      }),
      /* @__PURE__ */ jsx(SearchBar, {}),
      /* @__PURE__ */ jsxs('div', {
        className: `${styles$n.buttonsContainer} ${styles$n.secondContainer}`,
        children: [
          /* @__PURE__ */ jsx(NewVideoButton, {}),
          /* @__PURE__ */ jsx(NotificationsButton, {}),
          /* @__PURE__ */ jsx(ProfileImage, {}),
        ],
      }),
    ],
  });
}
Navbar.propTypes = {
  menuClickHandler: PropTypes.func.isRequired,
};
Navbar.defaultProps = {};
const appContainer = '_appContainer_l0ddn_1';
const styles$b = {
  appContainer,
};
const videosContainer = '_videosContainer_e8hz6_1';
const styles$a = {
  videosContainer,
};
const videoItem = '_videoItem_1omzl_1';
const imageContainer = '_imageContainer_1omzl_10';
const infoContainer = '_infoContainer_1omzl_33';
const dataContainer = '_dataContainer_1omzl_37';
const title = '_title_1omzl_40';
const channelImage = '_channelImage_1omzl_56';
const horizontalData = '_horizontalData_1omzl_64';
const verifiedIcon = '_verifiedIcon_1omzl_76';
const circle$1 = '_circle_1omzl_82';
const moreButton = '_moreButton_1omzl_90';
const styles$9 = {
  videoItem,
  imageContainer,
  infoContainer,
  dataContainer,
  title,
  channelImage,
  horizontalData,
  verifiedIcon,
  circle: circle$1,
  moreButton,
};
const videoConfigMenu = '_videoConfigMenu_1p8z3_1';
const styles$8 = {
  videoConfigMenu,
};
function VideoConfigMenu() {
  return /* @__PURE__ */ jsxs('div', {
    className: styles$8.videoConfigMenu,
    children: [
      /* @__PURE__ */ jsx(MenuOptionItem, {
        title: 'Añadir a la cola',
        children: /* @__PURE__ */ jsx('svg', {
          display: 'block',
          pointerEvents: 'none',
          focusable: 'false',
          viewBox: '0 0 24 24',
          xmlns: 'http://www.w3.org/2000/svg',
          children: /* @__PURE__ */ jsx('g', {
            children: /* @__PURE__ */ jsx('path', {
              d: 'm21 16h-7v-1h7v1zm0-5h-12v1h12v-1zm0-4h-18v1h18v-1zm-11 8-7-4v8l7-4z',
            }),
          }),
        }),
      }),
      /* @__PURE__ */ jsx(MenuOptionItem, {
        title: 'Guardar para ver más tarde',
        children: /* @__PURE__ */ jsx('svg', {
          display: 'block',
          pointerEvents: 'none',
          focusable: 'false',
          viewBox: '0 0 24 24',
          xmlns: 'http://www.w3.org/2000/svg',
          children: /* @__PURE__ */ jsx('g', {
            children: /* @__PURE__ */ jsx('path', {
              d: 'M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M12,3c-4.96,0-9,4.04-9,9s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z',
            }),
          }),
        }),
      }),
      /* @__PURE__ */ jsx(MenuOptionItem, {
        title: 'Añadir a la lista de reproducción',
        children: /* @__PURE__ */ jsx('svg', {
          className: 'style-scope yt-icon',
          display: 'block',
          pointerEvents: 'none',
          focusable: 'false',
          viewBox: '0 0 24 24',
          xmlns: 'http://www.w3.org/2000/svg',
          children: /* @__PURE__ */ jsx('g', {
            className: 'style-scope yt-icon',
            children: /* @__PURE__ */ jsx('path', {
              className: 'style-scope yt-icon',
              d: 'm22 13h-4v4h-2v-4h-4v-2h4v-4h2v4h4v2zm-8-6h-12v1h12v-1zm-12 5h8v-1h-8v1zm0 4h8v-1h-8v1z',
            }),
          }),
        }),
      }),
      /* @__PURE__ */ jsx(MenuOptionItem, {
        title: 'Descargar',
        children: /* @__PURE__ */ jsx('svg', {
          viewBox: '0 0 24 24',
          preserveAspectRatio: 'xMidYMid meet',
          focusable: 'false',
          className: 'style-scope yt-icon',
          children: /* @__PURE__ */ jsx('g', {
            className: 'style-scope yt-icon',
            children: /* @__PURE__ */ jsx('path', {
              d: 'M17 18V19H6V18H17ZM16.5 11.4L15.8 10.7L12 14.4V4H11V14.4L7.2 10.6L6.5 11.3L11.5 16.3L16.5 11.4Z',
              className: 'style-scope yt-icon',
            }),
          }),
        }),
      }),
      /* @__PURE__ */ jsx(MenuOptionItem, {
        title: 'Compartir',
        children: /* @__PURE__ */ jsx('svg', {
          viewBox: '0 0 24 24',
          preserveAspectRatio: 'xMidYMid meet',
          focusable: 'false',
          className: 'style-scope yt-icon',
          children: /* @__PURE__ */ jsx('g', {
            className: 'style-scope yt-icon',
            children: /* @__PURE__ */ jsx('path', {
              d: 'M15,5.63L20.66,12L15,18.37V15v-1h-1c-3.96,0-7.14,1-9.75,3.09c1.84-4.07,5.11-6.4,9.89-7.1L15,9.86V9V5.63 M14,3v6 C6.22,10.13,3.11,15.33,2,21c2.78-3.97,6.44-6,12-6v6l8-9L14,3L14,3z',
              className: 'style-scope yt-icon',
            }),
          }),
        }),
      }),
      /* @__PURE__ */ jsx(MenuHr, {}),
      /* @__PURE__ */ jsx(MenuOptionItem, {
        title: 'No me interesa',
        children: /* @__PURE__ */ jsx('svg', {
          viewBox: '0 0 24 24',
          preserveAspectRatio: 'xMidYMid meet',
          focusable: 'false',
          className: 'style-scope yt-icon',
          children: /* @__PURE__ */ jsx('g', {
            className: 'style-scope yt-icon',
            children: /* @__PURE__ */ jsx('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M18.71 6C20.13 7.59 21 9.69 21 12c0 4.97-4.03 9-9 9-2.31 0-4.41-.87-6-2.29L18.71 6zM3 12c0-4.97 4.03-9 9-9 2.31 0 4.41.87 6 2.29L5.29 18C3.87 16.41 3 14.31 3 12zm9-10c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z',
              className: 'style-scope yt-icon',
            }),
          }),
        }),
      }),
      /* @__PURE__ */ jsx(MenuOptionItem, {
        title: 'No recomendarme este canal',
        children: /* @__PURE__ */ jsx('svg', {
          viewBox: '0 0 24 24',
          preserveAspectRatio: 'xMidYMid meet',
          focusable: 'false',
          className: 'style-scope yt-icon',
          children: /* @__PURE__ */ jsx('g', {
            className: 'style-scope yt-icon',
            children: /* @__PURE__ */ jsx('path', {
              d: 'M12,3c-4.96,0-9,4.04-9,9s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12 S6.48,2,12,2L12,2z M19,13H5v-2h14V13z',
              className: 'style-scope yt-icon',
            }),
          }),
        }),
      }),
      /* @__PURE__ */ jsx(MenuOptionItem, {
        title: 'Denunciar',
        children: /* @__PURE__ */ jsx('svg', {
          viewBox: '0 0 24 24',
          preserveAspectRatio: 'xMidYMid meet',
          focusable: 'false',
          className: 'style-scope yt-icon',
          children: /* @__PURE__ */ jsx('g', {
            className: 'style-scope yt-icon',
            children: /* @__PURE__ */ jsx('path', {
              d: 'M13.18,4l0.24,1.2L13.58,6h0.82H19v7h-5.18l-0.24-1.2L13.42,11H12.6H6V4H13.18 M14,3H5v18h1v-9h6.6l0.4,2h7V5h-5.6L14,3 L14,3z',
              className: 'style-scope yt-icon',
            }),
          }),
        }),
      }),
    ],
  });
}
VideoConfigMenu.propTypes = {};
VideoConfigMenu.defaultProps = {};
moment.locale('es');
function VideoItem({
  channelPicture, title: title2, date, videoPicture, channelName,
}) {
  const [menuButtonSelected, toogleSelected] = useSwitch(false);
  const menuRef = useOutsideClick(toogleSelected, menuButtonSelected);
  return /* @__PURE__ */ jsxs('div', {
    className: styles$9.videoItem,
    children: [
      /* @__PURE__ */ jsxs('div', {
        className: styles$9.imageContainer,
        children: [
          /* @__PURE__ */ jsx('img', { src: videoPicture, alt: 'Video image' }),
          /* @__PURE__ */ jsx('span', { className: styles$9.duration, children: '10:10' }),
        ],
      }),
      /* @__PURE__ */ jsxs('div', {
        className: styles$9.infoContainer,
        children: [
          /* @__PURE__ */ jsx('img', {
            className: styles$9.channelImage,
            src: channelPicture,
            alt: 'Channel img',
          }),
          /* @__PURE__ */ jsxs('div', {
            className: styles$9.dataContainer,
            children: [
              /* @__PURE__ */ jsx('h3', { className: styles$9.title, children: title2 }),
              /* @__PURE__ */ jsxs('div', {
                className: styles$9.horizontalData,
                children: [
                  /* @__PURE__ */ jsx('span', { children: channelName }),
                  /* @__PURE__ */ jsx('svg', {
                    className: styles$9.verifiedIcon,
                    display: 'block',
                    pointerEvents: 'none',
                    focusable: 'false',
                    viewBox: '0 0 24 24',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: /* @__PURE__ */ jsx('g', {
                      children: /* @__PURE__ */ jsx('path', {
                        d: 'm12 2c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm-2.2 15.3-4.2-4.1 1.4-1.4 2.8 2.7 7.2-7.1 1.4 1.4-8.6 8.5z',
                      }),
                    }),
                  }),
                ],
              }),
              /* @__PURE__ */ jsxs('div', {
                className: styles$9.horizontalData,
                children: [
                  /* @__PURE__ */ jsx('span', { children: '135K visualizaciones' }),
                  /* @__PURE__ */ jsx('span', { className: styles$9.circle }),
                  /* @__PURE__ */ jsx('span', { children: moment(date).fromNow() }),
                ],
              }),
            ],
          }),
          /* @__PURE__ */ jsx(NavbarButton, {
            className: styles$9.moreButton,
            subMenu: menuButtonSelected && /* @__PURE__ */ jsx(VideoConfigMenu, {}),
            onClick: toogleSelected,
            refProp: menuRef,
            children: /* @__PURE__ */ jsx('svg', {
              display: 'block',
              pointerEvents: 'none',
              focusable: 'false',
              viewBox: '0 0 24 24',
              xmlns: 'http://www.w3.org/2000/svg',
              children: /* @__PURE__ */ jsx('g', {
                children: /* @__PURE__ */ jsx('path', {
                  d: 'm12 16.5c0.83 0 1.5 0.67 1.5 1.5s-0.67 1.5-1.5 1.5-1.5-0.67-1.5-1.5 0.67-1.5 1.5-1.5zm-1.5-4.5c0 0.83 0.67 1.5 1.5 1.5s1.5-0.67 1.5-1.5-0.67-1.5-1.5-1.5-1.5 0.67-1.5 1.5zm0-6c0 0.83 0.67 1.5 1.5 1.5s1.5-0.67 1.5-1.5-0.67-1.5-1.5-1.5-1.5 0.67-1.5 1.5z',
                }),
              }),
            }),
          }),
        ],
      }),
    ],
  });
}
VideoItem.propTypes = {
  channelPicture: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  videoPicture: PropTypes.string.isRequired,
  channelName: PropTypes.string.isRequired,
};
function VideosContainer() {
  const [videosList, setVideosList] = useState([]);
  const { callApi, result } = useYoutubeApi();
  useEffect(() => {
    callApi(30);
  }, []);
  useEffect(() => {
    if (!result) {
      return;
    }
    setVideosList((prev) => [...prev, ...result]);
  }, [result]);
  return /* @__PURE__ */ jsx('div', {
    className: styles$a.videosContainer,
    children: videosList.map((video) =>
      /* @__PURE__ */ jsx(
        VideoItem,
        {
          channelName: video.channelName,
          channelPicture: video.channelPictures.default.url,
          videoPicture: video.videoPictures.high.url,
          title: video.title,
          date: video.date,
        },
        video.id,
      )),
  });
}
const sideMenu = '_sideMenu_1a44m_1';
const privacyAlert = '_privacyAlert_1a44m_27';
const styles$7 = {
  sideMenu,
  privacyAlert,
};
const optionItemContainer$2 = '_optionItemContainer_mpwf7_1';
const optionItem$2 = '_optionItem_mpwf7_1';
const selected$1 = '_selected_mpwf7_24';
const iconContainer$1 = '_iconContainer_mpwf7_32';
const styles$6 = {
  optionItemContainer: optionItemContainer$2,
  optionItem: optionItem$2,
  selected: selected$1,
  iconContainer: iconContainer$1,
};
function SideMenuOptionItem({ children, title: title2, selected: selected2 }) {
  return /* @__PURE__ */ jsx('a', {
    href: '/',
    className: styles$6.optionItemContainer,
    children: /* @__PURE__ */ jsxs('div', {
      className: `${styles$6.optionItem} ${selected2 ? styles$6.selected : ''}`,
      children: [
        /* @__PURE__ */ jsx('div', { className: styles$6.iconContainer, children }),
        /* @__PURE__ */ jsx('span', { children: title2 }),
      ],
    }),
  });
}
SideMenuOptionItem.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  selected: PropTypes.bool,
};
SideMenuOptionItem.defaultProps = {
  selected: false,
};
const channelList = '_channelList_roks6_1';
const styles$5 = {
  channelList,
};
const optionItemContainer$1 = '_optionItemContainer_1orj4_1';
const optionItem$1 = '_optionItem_1orj4_1';
const name = '_name_1orj4_29';
const circle = '_circle_1orj4_40';
const styles$4 = {
  optionItemContainer: optionItemContainer$1,
  optionItem: optionItem$1,
  name,
  circle,
};
function ChannelItem({ picture, name: name2 }) {
  return /* @__PURE__ */ jsx('a', {
    href: '/',
    className: styles$4.optionItemContainer,
    children: /* @__PURE__ */ jsxs('div', {
      className: `${styles$4.optionItem}`,
      children: [
        /* @__PURE__ */ jsx('img', { src: picture, alt: 'channel picture' }),
        /* @__PURE__ */ jsx('span', { className: styles$4.name, children: name2 }),
        /* @__PURE__ */ jsx('span', { className: styles$4.circle }),
      ],
    }),
  });
}
ChannelItem.propTypes = {
  picture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
ChannelItem.defaultProps = {};
function SuscribedChannelsList() {
  const { callApi, result } = useYoutubeApi();
  useEffect(() => {
    callApi(7);
  }, []);
  return /* @__PURE__ */ jsx('div', {
    className: styles$5.channelList,
    children:
      result == null
        ? void 0
        : result.map((item2) =>
        /* @__PURE__ */ jsx(
            ChannelItem,
            {
              name: item2.channelName,
              picture: item2.channelPictures.default.url,
            },
            item2.id,
          )),
  });
}
SuscribedChannelsList.propTypes = {};
SuscribedChannelsList.defaultProps = {};
const sideMenuLinks = '_sideMenuLinks_19msr_1';
const styles$3 = {
  sideMenuLinks,
};
function SideMenuLinks({ links }) {
  return /* @__PURE__ */ jsx('div', {
    className: styles$3.sideMenuLinks,
    children:
      links == null
        ? void 0
        : links.map((link) => /* @__PURE__ */ jsx('a', { href: '#', children: link }, link)),
  });
}
SideMenuLinks.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
};
function SideMenu() {
  return /* @__PURE__ */ jsxs('div', {
    className: styles$7.sideMenu,
    children: [
      /* @__PURE__ */ jsx(SideMenuOptionItem, {
        title: 'Inicio',
        selected: true,
        children: /* @__PURE__ */ jsx('svg', {
          className: 'style-scope yt-icon',
          display: 'block',
          pointerEvents: 'none',
          focusable: 'false',
          viewBox: '0 0 24 24',
          xmlns: 'http://www.w3.org/2000/svg',
          children: /* @__PURE__ */ jsx('g', {
            className: 'style-scope yt-icon',
            children: /* @__PURE__ */ jsx('path', {
              className: 'style-scope yt-icon',
              d: 'M4,10V21h6V15h4v6h6V10L12,3Z',
            }),
          }),
        }),
      }),
      /* @__PURE__ */ jsx(SideMenuOptionItem, {
        title: 'Shorts',
        children: /* @__PURE__ */ jsx('svg', {
          className: 'style-scope yt-icon',
          display: 'block',
          pointerEvents: 'none',
          focusable: 'false',
          viewBox: '0 0 24 24',
          xmlns: 'http://www.w3.org/2000/svg',
          children: /* @__PURE__ */ jsx('g', {
            className: 'style-scope yt-icon',
            width: '24',
            height: '24',
            children: /* @__PURE__ */ jsx('path', {
              className: 'style-scope yt-icon',
              d: 'M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33c-.77-.32-1.2-.5-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z',
            }),
          }),
        }),
      }),
      /* @__PURE__ */ jsx(SideMenuOptionItem, {
        title: 'Suscripciones',
        children: /* @__PURE__ */ jsx('svg', {
          className: 'style-scope yt-icon',
          display: 'block',
          pointerEvents: 'none',
          focusable: 'false',
          viewBox: '0 0 24 24',
          xmlns: 'http://www.w3.org/2000/svg',
          children: /* @__PURE__ */ jsx('g', {
            className: 'style-scope yt-icon',
            children: /* @__PURE__ */ jsx('path', {
              className: 'style-scope yt-icon',
              d: 'M10,18v-6l5,3L10,18z M17,3H7v1h10V3z M20,6H4v1h16V6z M22,9H2v12h20V9z M3,10h18v10H3V10z',
            }),
          }),
        }),
      }),
      /* @__PURE__ */ jsx(MenuHr, {}),
      /* @__PURE__ */ jsx(SideMenuOptionItem, {
        title: 'Mi biblioteca',
        children: /* @__PURE__ */ jsx('svg', {
          className: 'style-scope yt-icon',
          display: 'block',
          pointerEvents: 'none',
          focusable: 'false',
          viewBox: '0 0 24 24',
          xmlns: 'http://www.w3.org/2000/svg',
          children: /* @__PURE__ */ jsx('g', {
            className: 'style-scope yt-icon',
            children: /* @__PURE__ */ jsx('path', {
              className: 'style-scope yt-icon',
              d: 'M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z',
            }),
          }),
        }),
      }),
      /* @__PURE__ */ jsx(SideMenuOptionItem, {
        title: 'Historial',
        children: /* @__PURE__ */ jsx('svg', {
          className: 'style-scope yt-icon',
          display: 'block',
          pointerEvents: 'none',
          focusable: 'false',
          viewBox: '0 0 24 24',
          xmlns: 'http://www.w3.org/2000/svg',
          children: /* @__PURE__ */ jsx('g', {
            className: 'style-scope yt-icon',
            children: /* @__PURE__ */ jsx('path', {
              className: 'style-scope yt-icon',
              d: 'M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M22,12c0,5.51-4.49,10-10,10S2,17.51,2,12h1c0,4.96,4.04,9,9,9 s9-4.04,9-9s-4.04-9-9-9C8.81,3,5.92,4.64,4.28,7.38C4.17,7.56,4.06,7.75,3.97,7.94C3.96,7.96,3.95,7.98,3.94,8H8v1H1.96V3h1v4.74 C3,7.65,3.03,7.57,3.07,7.49C3.18,7.27,3.3,7.07,3.42,6.86C5.22,3.86,8.51,2,12,2C17.51,2,22,6.49,22,12z',
            }),
          }),
        }),
      }),
      /* @__PURE__ */ jsx(SideMenuOptionItem, {
        title: 'Mis vídeos',
        children: /* @__PURE__ */ jsx('svg', {
          className: 'style-scope yt-icon',
          display: 'block',
          pointerEvents: 'none',
          focusable: 'false',
          viewBox: '0 0 24 24',
          xmlns: 'http://www.w3.org/2000/svg',
          children: /* @__PURE__ */ jsx('g', {
            className: 'style-scope yt-icon',
            children: /* @__PURE__ */ jsx('path', {
              className: 'style-scope yt-icon',
              d: 'M10,8l6,4l-6,4V8L10,8z M21,3v18H3V3H21z M20,4H4v16h16V4z',
            }),
          }),
        }),
      }),
      /* @__PURE__ */ jsx(SideMenuOptionItem, {
        title: 'Ver más tarde',
        children: /* @__PURE__ */ jsx('svg', {
          className: 'style-scope yt-icon',
          display: 'block',
          pointerEvents: 'none',
          focusable: 'false',
          viewBox: '0 0 24 24',
          xmlns: 'http://www.w3.org/2000/svg',
          children: /* @__PURE__ */ jsx('g', {
            className: 'style-scope yt-icon',
            children: /* @__PURE__ */ jsx('path', {
              className: 'style-scope yt-icon',
              d: 'M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M12,3c-4.96,0-9,4.04-9,9s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z',
            }),
          }),
        }),
      }),
      /* @__PURE__ */ jsx(SideMenuOptionItem, {
        title: 'Vídeos que me gustan',
        children: /* @__PURE__ */ jsx('svg', {
          className: 'style-scope yt-icon',
          display: 'block',
          pointerEvents: 'none',
          focusable: 'false',
          viewBox: '0 0 24 24',
          xmlns: 'http://www.w3.org/2000/svg',
          children: /* @__PURE__ */ jsx('g', {
            className: 'style-scope yt-icon',
            children: /* @__PURE__ */ jsx('path', {
              className: 'style-scope yt-icon',
              d: 'm18.77 11h-4.23l1.52-4.94c0.32-1.03-0.52-2.06-1.68-2.06-0.58 0-1.14 0.24-1.52 0.65l-5.86 6.35h-4v10h14.43c1.06 0 1.98-0.67 2.19-1.61l1.34-6c0.27-1.24-0.78-2.39-2.19-2.39zm-11.77 9h-3v-8h3v8zm12.98-6.83-1.34 6c-0.1 0.48-0.61 0.83-1.21 0.83h-9.43v-8.61l5.6-6.06c0.19-0.21 0.48-0.33 0.78-0.33 0.26 0 0.5 0.11 0.63 0.3 0.07 0.1 0.15 0.26 0.09 0.47l-1.52 4.94-0.4 1.29h5.58c0.41 0 0.8 0.17 1.03 0.46 0.13 0.15 0.26 0.4 0.19 0.71z',
            }),
          }),
        }),
      }),
      /* @__PURE__ */ jsx(SideMenuOptionItem, {
        title: 'Mostrar más',
        children: /* @__PURE__ */ jsx('svg', {
          className: 'style-scope yt-icon',
          display: 'block',
          pointerEvents: 'none',
          focusable: 'false',
          viewBox: '0 0 24 24',
          xmlns: 'http://www.w3.org/2000/svg',
          children: /* @__PURE__ */ jsx('g', {
            className: 'style-scope yt-icon',
            children: /* @__PURE__ */ jsx('path', {
              className: 'style-scope yt-icon',
              d: 'm12 15.7-6.4-6.3 0.7-0.7 5.6 5.6 5.6-5.6 0.7 0.7-6.2 6.3z',
            }),
          }),
        }),
      }),
      /* @__PURE__ */ jsx(MenuHr, {}),
      /* @__PURE__ */ jsx('h3', { children: 'Suscripciones' }),
      /* @__PURE__ */ jsx(SuscribedChannelsList, {}),
      /* @__PURE__ */ jsx(MenuHr, {}),
      /* @__PURE__ */ jsx('h3', { children: 'Explorar' }),
      /* @__PURE__ */ jsx(SideMenuOptionItem, {
        title: 'Tendencias',
        children: /* @__PURE__ */ jsx('svg', {
          className: 'style-scope yt-icon',
          display: 'block',
          pointerEvents: 'none',
          focusable: 'false',
          viewBox: '0 0 24 24',
          xmlns: 'http://www.w3.org/2000/svg',
          children: /* @__PURE__ */ jsx('g', {
            className: 'style-scope yt-icon',
            children: /* @__PURE__ */ jsx('path', {
              className: 'style-scope yt-icon',
              d: 'm14.72 17.84c-0.32 0.27-0.83 0.53-1.23 0.66-1.34 0.33-2.41-0.34-2.62-0.46-0.21-0.11-0.78-0.38-0.78-0.38s0.35-0.11 0.41-0.13c1.34-0.54 1.89-1.24 2.09-2.11 0.2-0.84-0.16-1.56-0.31-2.39-0.12-0.69-0.11-1.28 0.12-1.9 0.02-0.05 0.12-0.43 0.12-0.43s0.11 0.35 0.13 0.41c0.71 1.51 2.72 2.18 3.07 3.84 0.03 0.15 0.05 0.3 0.05 0.46 0.03 0.89-0.37 1.85-1.05 2.43zm-2.32-13.5c-0.12 0.08-0.22 0.15-0.31 0.22-2.99 2.31-2.91 5.93-2.31 8.55l0.02 0.06c0.06 0.35-0.05 0.7-0.28 0.96-0.24 0.26-0.58 0.41-0.95 0.41-0.44 0-0.85-0.2-1.22-0.6-0.67-0.73-1.17-1.57-1.5-2.46-0.36 0.77-0.75 1.98-0.67 3.19 0.04 0.51 0.12 1 0.25 1.43 0.18 0.6 0.43 1.16 0.75 1.65 1.05 1.66 2.88 2.82 4.78 3.05 0.42 0.05 0.85 0.08 1.26 0.08 1.34 0 3.25-0.27 4.74-1.57 1.77-1.56 2.35-3.99 1.44-6.06-0.04-0.1-0.06-0.14-0.09-0.19l-0.04-0.08c-0.21-0.42-0.47-0.81-0.75-1.14-0.24-0.3-0.48-0.56-0.79-0.83-0.3-0.27-0.64-0.51-1-0.77-0.46-0.33-0.93-0.67-1.38-1.09-1.37-1.32-2.05-3.04-1.95-4.81m2.01-2.34s-0.2 0.2-0.56 0.99c-0.66 1.92-0.15 3.95 1.34 5.39 0.73 0.69 1.61 1.17 2.36 1.84 0.32 0.29 0.62 0.59 0.89 0.93 0.36 0.42 0.66 0.89 0.91 1.38 0.05 0.1 0.1 0.2 0.14 0.3 1.12 2.55 0.36 5.47-1.73 7.31-1.53 1.33-3.54 1.86-5.54 1.86-0.47 0-0.95-0.03-1.41-0.09-2.29-0.28-4.42-1.66-5.63-3.57-0.39-0.6-0.68-1.26-0.88-1.93-0.16-0.54-0.25-1.1-0.29-1.67-0.12-1.88 0.67-3.63 1.08-4.31 0.41-0.69 1.55-2.18 1.55-2.18s0 0.03-0.01 0.09c-0.22 1.77 0.37 3.54 1.59 4.88 0.15 0.17 0.27 0.22 0.34 0.22 0.06 0 0.09-0.04 0.08-0.09-0.85-3.76-0.27-7.35 2.71-9.65 0.59-0.46 1.51-0.94 1.98-1.18s1.08-0.52 1.08-0.52z',
            }),
          }),
        }),
      }),
      /* @__PURE__ */ jsx(SideMenuOptionItem, {
        title: 'Música',
        children: /* @__PURE__ */ jsx('svg', {
          className: 'style-scope yt-icon',
          display: 'block',
          pointerEvents: 'none',
          focusable: 'false',
          viewBox: '0 0 24 24',
          xmlns: 'http://www.w3.org/2000/svg',
          children: /* @__PURE__ */ jsx('g', {
            className: 'style-scope yt-icon',
            children: /* @__PURE__ */ jsx('path', {
              className: 'style-scope yt-icon',
              d: 'm12 4v9.38c-0.73-0.84-1.8-1.38-3-1.38-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4v-8h6v-4h-7zm-3 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm9-12h-5v-2h5v2z',
            }),
          }),
        }),
      }),
      /* @__PURE__ */ jsx(SideMenuOptionItem, {
        title: 'Videojuegos',
        children: /* @__PURE__ */ jsx('svg', {
          className: 'style-scope yt-icon',
          display: 'block',
          pointerEvents: 'none',
          focusable: 'false',
          viewBox: '0 0 24 24',
          xmlns: 'http://www.w3.org/2000/svg',
          children: /* @__PURE__ */ jsx('g', {
            className: 'style-scope yt-icon',
            children: /* @__PURE__ */ jsx('path', {
              className: 'style-scope yt-icon',
              d: 'm10 12h-2v2h-2v-2h-2v-2h2v-2h2v2h2v2zm7 0.5c0-0.83-0.67-1.5-1.5-1.5s-1.5 0.67-1.5 1.5 0.67 1.5 1.5 1.5 1.5-0.67 1.5-1.5zm3-3c0-0.83-0.67-1.5-1.5-1.5s-1.5 0.67-1.5 1.5 0.67 1.5 1.5 1.5 1.5-0.67 1.5-1.5zm-3.03-4.35-4.5 2.53-0.49 0.27-0.49-0.27-4.5-2.53-3.99 2.24v6.43l8.98 5.04 8.98-5.04v-6.43l-3.99-2.24m0-1.15 4.99 2.8v7.6l-9.98 5.6-9.98-5.6v-7.6l4.99-2.8 4.99 2.8 4.99-2.8z',
            }),
          }),
        }),
      }),
      /* @__PURE__ */ jsx(SideMenuOptionItem, {
        title: 'Deportes',
        children: /* @__PURE__ */ jsx('svg', {
          className: 'style-scope yt-icon',
          display: 'block',
          pointerEvents: 'none',
          focusable: 'false',
          viewBox: '0 0 24 24',
          xmlns: 'http://www.w3.org/2000/svg',
          children: /* @__PURE__ */ jsx('g', {
            className: 'style-scope yt-icon',
            children: /* @__PURE__ */ jsx('path', {
              className: 'style-scope yt-icon',
              d: 'm17 3v7.51l-0.01 0.46c-0.05 2.13-1.33 3.97-3.25 4.7h-0.02l-0.06 0.02-0.66 0.26v4.05h1v1h1-5v-1h1v-4.05l-0.66-0.24-0.08-0.03h-0.01c-1.92-0.73-3.2-2.57-3.25-4.7v-7.98h10zm1-1h-12v3h-2v6h2.01c0.06 2.53 1.62 4.78 3.96 5.64 0.01 0 0.02 0 0.03 0.01v2.35h-1v1h-1v2h8v-2h-1v-1h-1v-2.35c0.01 0 0.02 0 0.03-0.01 2.33-0.86 3.9-3.1 3.96-5.64h2.01v-6h-2v-3zm0 8v-4h1v4h-1zm-13 0v-4h1v4h-1z',
            }),
          }),
        }),
      }),
      /* @__PURE__ */ jsx(SideMenuOptionItem, {
        title: 'Aprendizaje',
        children: /* @__PURE__ */ jsx('svg', {
          className: 'style-scope yt-icon',
          display: 'block',
          pointerEvents: 'none',
          focusable: 'false',
          viewBox: '0 0 24 24',
          xmlns: 'http://www.w3.org/2000/svg',
          children: /* @__PURE__ */ jsx('g', {
            className: 'style-scope yt-icon',
            children: /* @__PURE__ */ jsx('path', {
              className: 'style-scope yt-icon',
              d: 'M16,21h-2.28c-0.35,0.6-0.98,1-1.72,1s-1.38-0.4-1.72-1H8v-1h8V21z M20,10c0,2.96-1.61,5.54-4,6.92V19H8v-2.08 C5.61,15.54,4,12.96,4,10c0-4.42,3.58-8,8-8S20,5.58,20,10z M15,18v-1.66l0.5-0.29C17.66,14.8,19,12.48,19,10c0-3.86-3.14-7-7-7 s-7,3.14-7,7c0,2.48,1.34,4.8,3.5,6.06L9,16.34V18H15z',
            }),
          }),
        }),
      }),
      /* @__PURE__ */ jsx(MenuHr, {}),
      /* @__PURE__ */ jsx('h3', { children: 'Más de YouTube' }),
      /* @__PURE__ */ jsx(SideMenuOptionItem, {
        title: 'YouTube Premium',
        children: /* @__PURE__ */ jsx('svg', {
          className: 'style-scope yt-icon',
          display: 'block',
          pointerEvents: 'none',
          focusable: 'false',
          viewBox: '0 0 24 24',
          xmlns: 'http://www.w3.org/2000/svg',
          children: /* @__PURE__ */ jsx('g', {
            className: 'style-scope yt-icon',
            children: /* @__PURE__ */ jsxs('g', {
              className: 'style-scope yt-icon',
              fill: 'none',
              fillRule: 'evenodd',
              children: [
                /* @__PURE__ */ jsx('path', {
                  className: 'style-scope yt-icon',
                  d: 'M1 1h21.77v22H1z',
                }),
                /* @__PURE__ */ jsxs('g', {
                  className: 'style-scope yt-icon',
                  fillRule: 'nonzero',
                  children: [
                    /* @__PURE__ */ jsx('path', {
                      className: 'style-scope yt-icon',
                      d: 'M22.54 7.6s-.2-1.5-.86-2.17c-.83-.87-1.75-.88-2.18-.93-3.04-.22-7.6-.2-7.6-.2s-4.56-.02-7.6.2c-.43.05-1.35.06-2.18.93-.65.67-.86 2.18-.86 2.18S1.04 9.4 1 11.18v1.66c.04 1.78.26 3.55.26 3.55s.2 1.5.86 2.18c.83.87 1.9.84 2.4.94 1.7.15 7.2.2 7.38.2 0 0 4.57 0 7.6-.22.43-.05 1.35-.06 2.18-.93.65-.67.86-2.18.86-2.18s.22-1.77.24-3.55v-1.66c-.02-1.78-.24-3.55-.24-3.55z',
                      fill: '#F00',
                    }),
                    /* @__PURE__ */ jsx('path', {
                      className: 'style-scope yt-icon',
                      d: 'm9.68 8.9v6.18l5.84-3.1',
                      fill: '#FAFAFA',
                    }),
                    /* @__PURE__ */ jsx('path', {
                      className: 'style-scope yt-icon',
                      d: 'M9.68 8.88l5.13 3.48.73-.38',
                      fill: '#000',
                      fillOpacity: '.12',
                    }),
                    /* @__PURE__ */ jsx('path', {
                      className: 'style-scope yt-icon',
                      d: 'M22.54 7.6s-.2-1.5-.86-2.17c-.83-.87-1.75-.88-2.18-.93-3.04-.22-7.6-.2-7.6-.2s-4.56-.02-7.6.2c-.43.05-1.35.06-2.18.93-.65.67-.86 2.18-.86 2.18S1.04 9.4 1 11.18v.1c.04-1.76.26-3.54.26-3.54s.2-1.5.86-2.17c.83-.88 1.75-.88 2.18-.93 3.04-.22 7.6-.2 7.6-.2s4.56-.02 7.6.2c.43.05 1.35.05 2.18.93.65.66.86 2.17.86 2.17s.22 1.78.23 3.55v-.1c0-1.8-.23-3.56-.23-3.56z',
                      fill: '#FFF',
                      fillOpacity: '.2',
                    }),
                    /* @__PURE__ */ jsx('path', {
                      className: 'style-scope yt-icon',
                      d: 'M22.54 16.4s-.2 1.5-.86 2.17c-.83.87-1.75.88-2.18.93-3.04.22-7.6.2-7.6.2s-4.56.02-7.6-.2c-.43-.05-1.35-.06-2.18-.93-.65-.67-.86-2.18-.86-2.18s-.22-1.8-.26-3.57v-.1c.04 1.76.26 3.54.26 3.54s.2 1.5.86 2.17c.83.88 1.75.88 2.18.93 3.04.22 7.6.2 7.6.2s4.56.02 7.6-.2c.43-.05 1.35-.05 2.18-.93.65-.66.86-2.17.86-2.17s.22-1.78.23-3.55v.1c0 1.8-.23 3.56-.23 3.56z',
                      fill: '#3E2723',
                      fillOpacity: '.2',
                    }),
                    /* @__PURE__ */ jsx('path', {
                      className: 'style-scope yt-icon',
                      d: 'M9.68 15.08v.1l5.84-3.08v-.12',
                      fill: '#FFF',
                      fillOpacity: '.2',
                    }),
                    /* @__PURE__ */ jsx('path', {
                      className: 'style-scope yt-icon',
                      d: 'M9.68 8.9v-.13l5.84 3.1v.1',
                      fill: '#3E2723',
                      fillOpacity: '.2',
                    }),
                    /* @__PURE__ */ jsx('path', {
                      className: 'style-scope yt-icon',
                      transform: 'translate(1 4.208)',
                      d: 'M21.54 3.4s-.2-1.5-.86-2.18C19.85.35 18.93.35 18.5.3 15.46.07 10.9.1 10.9.1S6.34.07 3.3.3c-.43.05-1.35.05-2.18.92C.47 1.9.26 3.4.26 3.4S.04 5.17 0 6.95V8.6c.04 1.8.26 3.56.26 3.56s.2 1.52.86 2.18c.83.87 1.9.85 2.4.94 1.7.16 7.2.2 7.38.2 0 0 4.57 0 7.6-.2.43-.06 1.35-.07 2.18-.94.65-.66.86-2.18.86-2.18s.22-1.77.24-3.55V6.97c-.02-1.78-.24-3.55-.24-3.55z',
                      fill: 'url(#youtube_round__a)',
                      fillOpacity: '.1',
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
      }),
      /* @__PURE__ */ jsx(SideMenuOptionItem, {
        title: 'YouTube Studio',
        children: /* @__PURE__ */ jsx('svg', {
          className: 'style-scope yt-icon',
          display: 'block',
          pointerEvents: 'none',
          focusable: 'false',
          viewBox: '0 0 24 24',
          xmlns: 'http://www.w3.org/2000/svg',
          children: /* @__PURE__ */ jsxs('g', {
            className: 'style-scope yt-icon',
            children: [
              /* @__PURE__ */ jsx('path', {
                className: 'style-scope yt-icon',
                d: 'M11.13 1.21c.48-.28 1.26-.28 1.74 0l8.01 4.64c.48.28.87.97.87 1.53v9.24c0 .56-.39 1.25-.87 1.53l-8.01 4.64c-.48.28-1.26.28-1.74 0l-8.01-4.64c-.48-.28-.87-.97-.87-1.53V7.38c0-.56.39-1.25.87-1.53l8.01-4.64z',
                fill: 'red',
              }),
              /* @__PURE__ */ jsx('path', {
                className: 'style-scope yt-icon',
                d: 'm12.71 18.98 4.9-2.83c.41-.24.64-.77.64-1.24V9.24c0-.47-.23-1-.64-1.24l-4.9-2.82c-.41-.23-1.02-.23-1.42 0L6.39 8c-.4.23-.64.77-.64 1.24v5.67c0 .47.24 1 .64 1.24l4.9 2.83c.2.12.46.18.71.18.26-.01.51-.07.71-.18z',
                fill: '#fff',
              }),
              /* @__PURE__ */ jsx('path', {
                className: 'style-scope yt-icon',
                d: 'm12.32 5.73 4.89 2.83c.16.09.41.31.41.67v5.67c0 .37-.25.54-.41.64l-4.89 2.83c-.16.09-.48.09-.64 0l-4.89-2.83c-.16-.09-.41-.34-.41-.64V9.24c.02-.37.25-.58.41-.68l4.89-2.83c.08-.05.2-.07.32-.07s.24.02.32.07z',
                fill: 'red',
              }),
              /* @__PURE__ */ jsx('path', {
                className: 'style-scope yt-icon',
                d: 'M9.88 15.25 15.5 12 9.88 8.75z',
                fill: '#fff',
              }),
            ],
          }),
        }),
      }),
      /* @__PURE__ */ jsx(SideMenuOptionItem, {
        title: 'YouTube Music',
        children: /* @__PURE__ */ jsx('svg', {
          className: 'style-scope yt-icon',
          display: 'block',
          pointerEvents: 'none',
          focusable: 'false',
          viewBox: '0 0 24 24',
          xmlns: 'http://www.w3.org/2000/svg',
          children: /* @__PURE__ */ jsxs('g', {
            className: 'style-scope yt-icon',
            children: [
              /* @__PURE__ */ jsx('circle', {
                className: 'style-scope yt-icon',
                cx: '12',
                cy: '12',
                r: '10',
                fill: '#f00',
              }),
              /* @__PURE__ */ jsx('polygon', {
                className: 'style-scope yt-icon',
                points: '10 14.65 10 9.35 15 12',
                fill: '#fff',
              }),
              /* @__PURE__ */ jsx('path', {
                className: 'style-scope yt-icon',
                d: 'm12 7c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5m0-1c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z',
                fill: '#fff',
              }),
            ],
          }),
        }),
      }),
      /* @__PURE__ */ jsx(SideMenuOptionItem, {
        title: 'YouTube Kids',
        children: /* @__PURE__ */ jsx('svg', {
          className: 'style-scope yt-icon',
          display: 'block',
          pointerEvents: 'none',
          style: { fill: 'black' },
          focusable: 'false',
          viewBox: '0 0 24 24',
          xmlns: 'http://www.w3.org/2000/svg',
          children: /* @__PURE__ */ jsxs('g', {
            className: 'style-scope yt-icon',
            children: [
              /* @__PURE__ */ jsx('path', {
                className: 'style-scope yt-icon',
                d: 'm21.39 13.19v-0.22c-0.01-0.86-0.5-5-0.78-5.74-0.32-0.85-0.76-1.5-1.31-1.91-0.9-0.67-1.66-0.82-2.6-0.84h-0.02c-0.4 0-3.01 0.32-5.2 0.62-2.2 0.3-4.95 0.7-5.6 0.94-0.9 0.33-1.62 0.77-2.19 1.33-1.05 1.04-1.18 2.11-1.04 3.51 0.1 1.09 0.69 5.37 1.02 6.35 0.45 1.32 1.33 2.12 2.47 2.24 0.28 0.03 0.55 0.05 0.82 0.05 1 0 1.8-0.21 2.72-0.46 1.45-0.39 3.25-0.87 6.97-0.87h0.09 0.02c0.91 0 3.14-0.2 4.16-2.07 0.52-1 0.49-2.21 0.47-2.93z',
                fill: '#f00',
              }),
              /* @__PURE__ */ jsx('path', {
                className: 'style-scope yt-icon',
                d: 'm21.99 13.26c0-0.08 0-0.16-0.01-0.24-0.01-0.92-0.54-5.32-0.83-6.11-0.34-0.91-0.81-1.59-1.4-2.03-0.94-0.71-1.76-0.86-2.75-0.88h-0.02c-0.43 0-3.21 0.34-5.54 0.66s-5.25 0.75-5.95 1c-0.96 0.35-1.73 0.82-2.33 1.42-1.12 1.1-1.25 2.25-1.11 3.74 0.11 1.16 0.73 5.71 1.08 6.75 0.48 1.41 1.41 2.25 2.63 2.38 0.3 0.03 0.58 0.05 0.87 0.05 1.07 0 1.91-0.23 2.89-0.49 1.54-0.41 3.46-0.93 7.41-0.93h0.1 0.02c0.97 0 3.34-0.21 4.42-2.2 0.57-1.06 0.54-2.35 0.52-3.12zm-1.4 2.65c-0.82 1.51-2.75 1.68-3.56 1.68h-0.1c-4.09 0-6.07 0.53-7.67 0.96-0.95 0.25-1.7 0.45-2.63 0.45-0.25 0-0.5-0.01-0.76-0.04-1.04-0.11-1.54-0.99-1.79-1.71-0.3-0.88-0.91-5.21-1.04-6.53-0.14-1.47 0.06-2.18 0.82-2.93 0.5-0.5 1.15-0.89 1.97-1.19 0.17-0.06 1.1-0.32 5.74-0.95 2.63-0.36 5.07-0.64 5.42-0.65 0.83 0.02 1.43 0.13 2.17 0.69 0.43 0.32 0.79 0.86 1.06 1.58 0.22 0.58 0.76 4.78 0.77 5.77l0.01 0.25c0.01 0.67 0.04 1.79-0.41 2.62z',
              }),
              /* @__PURE__ */ jsx('path', {
                className: 'style-scope yt-icon',
                d: 'm11.59 14.76c-0.48 0.36-0.8 0.45-1.01 0.45-0.16 0-0.25-0.05-0.3-0.08-0.34-0.18-0.42-0.61-0.5-1.2l-0.01-0.1c-0.04-0.31-0.26-2.1-0.38-3.16l-0.09-0.73c-0.04-0.28-0.1-0.75 0.24-1 0.32-0.23 0.75-0.09 0.96-0.03 0.53 0.17 3.6 1.23 4.59 1.73 0.21 0.09 0.67 0.28 0.68 0.83 0.01 0.5-0.38 0.74-0.53 0.82l-3.65 2.47z',
              }),
              /* @__PURE__ */ jsx('path', {
                className: 'style-scope yt-icon',
                d: 'm10.3 9.89s0.5 4.08 0.51 4.19c0.06-0.04 3.79-2.58 3.79-2.58-0.89-0.43-3.53-1.36-4.3-1.61z',
                fill: '#FFF',
              }),
            ],
          }),
        }),
      }),
      /* @__PURE__ */ jsx(MenuHr, {}),
      /* @__PURE__ */ jsx(SideMenuOptionItem, {
        title: 'Configuración',
        children: /* @__PURE__ */ jsx('svg', {
          className: 'style-scope yt-icon',
          display: 'block',
          pointerEvents: 'none',
          focusable: 'false',
          viewBox: '0 0 24 24',
          xmlns: 'http://www.w3.org/2000/svg',
          children: /* @__PURE__ */ jsx('g', {
            className: 'style-scope yt-icon',
            children: /* @__PURE__ */ jsx('path', {
              className: 'style-scope yt-icon',
              d: 'm12 9c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3m0-1c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm1.22-5 0.55 2.2 0.13 0.51 0.5 0.18c0.61 0.23 1.19 0.56 1.72 0.98l0.4 0.32 0.5-0.14 2.17-0.62 1.22 2.11-1.63 1.59-0.37 0.36 0.08 0.51c0.05 0.32 0.08 0.64 0.08 0.98s-0.03 0.66-0.08 0.98l-0.08 0.51 0.37 0.36 1.63 1.59-1.22 2.11-2.17-0.62-0.5-0.14-0.4 0.32c-0.53 0.43-1.11 0.76-1.72 0.98l-0.5 0.18-0.13 0.51-0.55 2.24h-2.44l-0.55-2.2-0.13-0.51-0.5-0.18c-0.6-0.23-1.18-0.56-1.72-0.99l-0.4-0.32-0.5 0.14-2.17 0.62-1.21-2.12 1.63-1.59 0.37-0.36-0.08-0.51c-0.05-0.32-0.08-0.65-0.08-0.98s0.03-0.66 0.08-0.98l0.08-0.51-0.37-0.36-1.63-1.59 1.22-2.11 2.17 0.62 0.5 0.14 0.4-0.32c0.53-0.44 1.11-0.77 1.72-0.99l0.5-0.18 0.13-0.51 0.54-2.21h2.44m0.78-1h-4l-0.74 2.96c-0.73 0.27-1.4 0.66-2 1.14l-2.92-0.83-2 3.46 2.19 2.13c-0.06 0.37-0.09 0.75-0.09 1.14s0.03 0.77 0.09 1.14l-2.19 2.13 2 3.46 2.92-0.83c0.6 0.48 1.27 0.87 2 1.14l0.74 2.96h4l0.74-2.96c0.73-0.27 1.4-0.66 2-1.14l2.92 0.83 2-3.46-2.19-2.13c0.06-0.37 0.09-0.75 0.09-1.14s-0.03-0.77-0.09-1.14l2.19-2.13-2-3.46-2.92 0.83c-0.6-0.48-1.27-0.87-2-1.14l-0.74-2.96z',
            }),
          }),
        }),
      }),
      /* @__PURE__ */ jsx(SideMenuOptionItem, {
        title: 'Historial de denuncias',
        children: /* @__PURE__ */ jsx('svg', {
          className: 'style-scope yt-icon',
          display: 'block',
          pointerEvents: 'none',
          focusable: 'false',
          viewBox: '0 0 24 24',
          xmlns: 'http://www.w3.org/2000/svg',
          children: /* @__PURE__ */ jsx('g', {
            className: 'style-scope yt-icon',
            children: /* @__PURE__ */ jsx('path', {
              className: 'style-scope yt-icon',
              d: 'm13.18 4 0.4 2h5.42v7h-5.18l-0.4-2h-7.42v-7h7.18m0.82-1h-9v18h1v-9h6.6l0.4 2h7v-9h-5.6l-0.4-2z',
            }),
          }),
        }),
      }),
      /* @__PURE__ */ jsx(SideMenuOptionItem, {
        title: 'Ayuda',
        children: /* @__PURE__ */ jsx('svg', {
          className: 'style-scope yt-icon',
          display: 'block',
          pointerEvents: 'none',
          focusable: 'false',
          viewBox: '0 0 24 24',
          xmlns: 'http://www.w3.org/2000/svg',
          children: /* @__PURE__ */ jsx('g', {
            className: 'style-scope yt-icon',
            children: /* @__PURE__ */ jsx('path', {
              className: 'style-scope yt-icon',
              d: 'm15.36 9.96c0 1.09-0.67 1.67-1.31 2.24-0.53 0.47-1.03 0.9-1.16 1.6l-0.04 0.2h-1.75l0.03-0.28c0.14-1.17 0.8-1.76 1.47-2.27 0.52-0.4 1.01-0.77 1.01-1.49 0-0.51-0.23-0.97-0.63-1.29-0.4-0.31-0.92-0.42-1.42-0.29-0.59 0.15-1.05 0.67-1.19 1.34l-0.05 0.28h-1.75l0.06-0.42c0.2-1.4 1.15-2.53 2.42-2.87 1.05-0.29 2.14-0.08 2.98 0.57 0.85 0.64 1.33 1.62 1.33 2.68zm-3.36 8.04c0.55 0 1-0.45 1-1s-0.45-1-1-1-1 0.45-1 1 0.45 1 1 1zm0-15c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10-10-4.48-10-10 4.48-10 10-10z',
            }),
          }),
        }),
      }),
      /* @__PURE__ */ jsx(SideMenuOptionItem, {
        title: 'Enviar sugerencias',
        children: /* @__PURE__ */ jsx('svg', {
          className: 'style-scope yt-icon',
          display: 'block',
          pointerEvents: 'none',
          focusable: 'false',
          viewBox: '0 0 24 24',
          xmlns: 'http://www.w3.org/2000/svg',
          children: /* @__PURE__ */ jsx('g', {
            className: 'style-scope yt-icon',
            children: /* @__PURE__ */ jsx('path', {
              className: 'style-scope yt-icon',
              d: 'm13 14h-2v-2h2v2zm0-9h-2v6h2v-6zm6-2h-14v16.59l3.59-3.59h10.41v-13m1-1v15h-11l-5 5v-20h16z',
            }),
          }),
        }),
      }),
      /* @__PURE__ */ jsx(MenuHr, {}),
      /* @__PURE__ */ jsx(SideMenuLinks, {
        links: [
          'Información',
          'Prensa',
          'Derechos de autor',
          'Contactar',
          'Creadores',
          'Publicidad',
          'Desarrolladores',
        ],
      }),
      /* @__PURE__ */ jsx(SideMenuLinks, {
        links: [
          'Términos',
          'Privacidad',
          'Política y seguridad',
          'Cómo funciona YouTube',
          'Probar funciones nuevas',
        ],
      }),
      /* @__PURE__ */ jsx('span', {
        className: styles$7.privacyAlert,
        children: '© 2023 Google LLC',
      }),
    ],
  });
}
SideMenu.propTypes = {};
SideMenu.defaultProps = {};
const sideMenuMinimized = '_sideMenuMinimized_zq7tn_1';
const styles$2 = {
  sideMenuMinimized,
};
const optionItemContainer = '_optionItemContainer_1uh2t_1';
const optionItem = '_optionItem_1uh2t_1';
const iconContainer = '_iconContainer_1uh2t_24';
const styles$1 = {
  optionItemContainer,
  optionItem,
  iconContainer,
};
function MinimizedMenuOptionItem({ children, title: title2 }) {
  return /* @__PURE__ */ jsx('a', {
    href: '/',
    className: styles$1.optionItemContainer,
    children: /* @__PURE__ */ jsxs('div', {
      className: `${styles$1.optionItem}`,
      children: [
        /* @__PURE__ */ jsx('div', { className: styles$1.iconContainer, children }),
        /* @__PURE__ */ jsx('span', { children: title2 }),
      ],
    }),
  });
}
MinimizedMenuOptionItem.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};
MinimizedMenuOptionItem.defaultProps = {};
function SideMenuMinimized() {
  return /* @__PURE__ */ jsxs('div', {
    className: styles$2.sideMenuMinimized,
    children: [
      /* @__PURE__ */ jsx(MinimizedMenuOptionItem, {
        title: 'Inicio',
        children: /* @__PURE__ */ jsx('svg', {
          className: 'style-scope yt-icon',
          display: 'block',
          pointerEvents: 'none',
          focusable: 'false',
          viewBox: '0 0 24 24',
          xmlns: 'http://www.w3.org/2000/svg',
          children: /* @__PURE__ */ jsx('g', {
            className: 'style-scope yt-icon',
            children: /* @__PURE__ */ jsx('path', {
              className: 'style-scope yt-icon',
              d: 'M4,10V21h6V15h4v6h6V10L12,3Z',
            }),
          }),
        }),
      }),
      /* @__PURE__ */ jsx(MinimizedMenuOptionItem, {
        title: 'Shorts',
        children: /* @__PURE__ */ jsx('svg', {
          className: 'style-scope yt-icon',
          display: 'block',
          pointerEvents: 'none',
          focusable: 'false',
          viewBox: '0 0 24 24',
          xmlns: 'http://www.w3.org/2000/svg',
          children: /* @__PURE__ */ jsx('g', {
            className: 'style-scope yt-icon',
            width: '24',
            height: '24',
            children: /* @__PURE__ */ jsx('path', {
              className: 'style-scope yt-icon',
              d: 'M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33c-.77-.32-1.2-.5-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z',
            }),
          }),
        }),
      }),
      /* @__PURE__ */ jsx(MinimizedMenuOptionItem, {
        title: 'Suscripciones',
        children: /* @__PURE__ */ jsx('svg', {
          className: 'style-scope yt-icon',
          display: 'block',
          pointerEvents: 'none',
          focusable: 'false',
          viewBox: '0 0 24 24',
          xmlns: 'http://www.w3.org/2000/svg',
          children: /* @__PURE__ */ jsx('g', {
            className: 'style-scope yt-icon',
            children: /* @__PURE__ */ jsx('path', {
              className: 'style-scope yt-icon',
              d: 'M10,18v-6l5,3L10,18z M17,3H7v1h10V3z M20,6H4v1h16V6z M22,9H2v12h20V9z M3,10h18v10H3V10z',
            }),
          }),
        }),
      }),
      /* @__PURE__ */ jsx(MinimizedMenuOptionItem, {
        title: 'Mi biblioteca',
        children: /* @__PURE__ */ jsx('svg', {
          className: 'style-scope yt-icon',
          display: 'block',
          pointerEvents: 'none',
          focusable: 'false',
          viewBox: '0 0 24 24',
          xmlns: 'http://www.w3.org/2000/svg',
          children: /* @__PURE__ */ jsx('g', {
            className: 'style-scope yt-icon',
            children: /* @__PURE__ */ jsx('path', {
              className: 'style-scope yt-icon',
              d: 'M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z',
            }),
          }),
        }),
      }),
    ],
  });
}
const categoriesBar = '_categoriesBar_1b9d0_1';
const list = '_list_1b9d0_11';
const item = '_item_1b9d0_17';
const selected = '_selected_1b9d0_36';
const styles = {
  categoriesBar,
  list,
  item,
  selected,
};
function CategoriesBar() {
  const categories = [
    'Todo',
    'Música',
    'Mixes',
    'En directo',
    'Videojuegos',
    'Javascript',
    'Breaking Bad',
  ];
  const [selected2, setSelected] = useState('Todo');
  return /* @__PURE__ */ jsx('div', {
    className: styles.categoriesBar,
    children: /* @__PURE__ */ jsx('div', {
      className: styles.list,
      children: categories.map((el) =>
        /* @__PURE__ */ jsx(
          'button',
          {
            type: 'button',
            className: `${styles.item} ${selected2 === el ? styles.selected : ''}`,
            onClick: () => setSelected(el),
            children: el,
          },
          el,
        )),
    }),
  });
}
CategoriesBar.propTypes = {};
CategoriesBar.defaultProps = {};
function App() {
  const [menuSwitch, toogleMenu] = useSwitch(true);
  return /* @__PURE__ */ jsxs('div', {
    className: styles$b.appContainer,
    children: [
      /* @__PURE__ */ jsx(Navbar, { menuClickHandler: toogleMenu }),
      /* @__PURE__ */ jsx(CategoriesBar, {}),
      menuSwitch ? /* @__PURE__ */ jsx(SideMenu, {}) : /* @__PURE__ */ jsx(SideMenuMinimized, {}),
      /* @__PURE__ */ jsx(VideosContainer, {}),
    ],
  });
}
const render = () => ReactDOMServer.renderToString(/* @__PURE__ */ jsx(App, {}));
// eslint-disable-next-line import/prefer-default-export
export { render };

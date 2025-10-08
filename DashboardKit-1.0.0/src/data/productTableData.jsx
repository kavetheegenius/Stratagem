// project import
import { getImageUrl, ImagePath } from 'utils/getImageUrl';
const GetAvatar = (name) => {
  const photo_new = `${name}.png`;
  return <img src={getImageUrl(`${photo_new}`, ImagePath.WIDGET)} alt="" className="img-20" />;
};

// Trading instruments table data
const ProductData = {
  wrapclass: 'table-card feed-card',
  height: '255px',
  title: 'Watchlist',
  tableheading: ['Symbol', 'Logo', 'Status', 'Price', 'Action'],
  rowdata: [
    {
      name: 'AAPL',
      image: GetAvatar('p1'),
      status: {
        badge: 'light-success',
        label: 'Bullish'
      },
      price: '$182.63',
      action: [
        {
          icon: 'trending_up',
          textcls: 'success',
          link: '#'
        },
        {
          icon: 'visibility',
          textcls: 'primary',
          link: '#'
        }
      ]
    },
    {
      name: 'TSLA',
      image: GetAvatar('p2'),
      status: {
        badge: 'light-danger',
        label: 'Bearish'
      },
      price: '$198.42',
      action: [
        {
          icon: 'trending_down',
          textcls: 'danger',
          link: '#'
        },
        {
          icon: 'visibility',
          textcls: 'primary',
          link: '#'
        }
      ]
    },
    {
      name: 'MSFT',
      image: GetAvatar('p3'),
      status: {
        badge: 'light-success',
        label: 'Bullish'
      },
      price: '$412.85',
      action: [
        {
          icon: 'trending_up',
          textcls: 'success',
          link: '#'
        },
        {
          icon: 'visibility',
          textcls: 'primary',
          link: '#'
        }
      ]
    },
    {
      name: 'NVDA',
      image: GetAvatar('p4'),
      status: {
        badge: 'light-warning',
        label: 'Neutral'
      },
      price: '$894.72',
      action: [
        {
          icon: 'trending_flat',
          textcls: 'warning',
          link: '#'
        },
        {
          icon: 'visibility',
          textcls: 'primary',
          link: '#'
        }
      ]
    },
    {
      name: 'GOOGL',
      image: GetAvatar('p1'),
      status: {
        badge: 'light-success',
        label: 'Bullish'
      },
      price: '$152.34',
      action: [
        {
          icon: 'trending_up',
          textcls: 'success',
          link: '#'
        },
        {
          icon: 'visibility',
          textcls: 'primary',
          link: '#'
        }
      ]
    },
    {
      name: 'AMZN',
      image: GetAvatar('p2'),
      status: {
        badge: 'light-danger',
        label: 'Bearish'
      },
      price: '$178.21',
      action: [
        {
          icon: 'trending_down',
          textcls: 'danger',
          link: '#'
        },
        {
          icon: 'visibility',
          textcls: 'primary',
          link: '#'
        }
      ]
    },
    {
      name: 'META',
      image: GetAvatar('p3'),
      status: {
        badge: 'light-success',
        label: 'Bullish'
      },
      price: '$485.67',
      action: [
        {
          icon: 'trending_up',
          textcls: 'success',
          link: '#'
        },
        {
          icon: 'visibility',
          textcls: 'primary',
          link: '#'
        }
      ]
    },
    {
      name: 'BTC',
      image: GetAvatar('p4'),
      status: {
        badge: 'light-warning',
        label: 'Neutral'
      },
      price: '$44,289',
      action: [
        {
          icon: 'trending_flat',
          textcls: 'warning',
          link: '#'
        },
        {
          icon: 'visibility',
          textcls: 'primary',
          link: '#'
        }
      ]
    },
    {
      name: 'ETH',
      image: GetAvatar('p1'),
      status: {
        badge: 'light-success',
        label: 'Bullish'
      },
      price: '$2,456',
      action: [
        {
          icon: 'trending_up',
          textcls: 'success',
          link: '#'
        },
        {
          icon: 'visibility',
          textcls: 'primary',
          link: '#'
        }
      ]
    },
    {
      name: 'SPY',
      image: GetAvatar('p2'),
      status: {
        badge: 'light-danger',
        label: 'Bearish'
      },
      price: '$452.18',
      action: [
        {
          icon: 'trending_down',
          textcls: 'danger',
          link: '#'
        },
        {
          icon: 'visibility',
          textcls: 'primary',
          link: '#'
        }
      ]
    },
    {
      name: 'QQQ',
      image: GetAvatar('p3'),
      status: {
        badge: 'light-success',
        label: 'Bullish'
      },
      price: '$389.45',
      action: [
        {
          icon: 'trending_up',
          textcls: 'success',
          link: '#'
        },
        {
          icon: 'visibility',
          textcls: 'primary',
          link: '#'
        }
      ]
    },
    {
      name: 'IWM',
      image: GetAvatar('p4'),
      status: {
        badge: 'light-warning',
        label: 'Neutral'
      },
      price: '$192.76',
      action: [
        {
          icon: 'trending_flat',
          textcls: 'warning',
          link: '#'
        },
        {
          icon: 'visibility',
          textcls: 'primary',
          link: '#'
        }
      ]
    }
  ]
};

export default ProductData;
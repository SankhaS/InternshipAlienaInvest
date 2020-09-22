import React from 'react';
import { Button } from './Button';
import './Pricing.css';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';
import {TiTick} from 'react-icons/ti'

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>Pricing</h1>
          <div className='pricing__container'>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <FaFire />
                </div>
                <h3>Metal</h3>
                <h4>2.15%</h4>
                <p>5% cashback</p>
                <ul className='pricing__container-features'>
                  <li><TiTick/>Charcoal Black Metal Card</li>
                  <li><TiTick/>2.15%1 Bonus Rate Checking Account</li>
                  <li><TiTick/>5% Cash back on brands you love</li>
                  <li><TiTick/>Free Cash Withdrawals</li>
                  <li><TiTick/>Phone and Chat Support</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary' disabled='true'>
                  Choose Plan
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <BsXDiamondFill />
                </div>
                <h3>Premium</h3>
                <h4>1.65%</h4>
                <p>4% cashback</p>
                <ul className='pricing__container-features'>
                  <li><TiTick/>Free Debit Card</li>
                  <li><TiTick/>1.65%2 Bonus Rate Checking Account</li>
                  <li><TiTick/>4% Cash back on brands you love</li>
                  <li><TiTick/>Free Cash Withdrawals</li>
                  <li><TiTick/>Phone and Chat Support</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Up Next
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <GiCrystalize />
                </div>
                <h3>Basic</h3>
                <h4>1.15%</h4>
                <p>3% cashback</p>
                <ul className='pricing__container-features'>
                  <li><TiTick/>Free Debit Card</li>
                  <li><TiTick/>1.15%3 Bonus Rate Checking Account</li>
                  <li><TiTick/>3% Cash back on brands you love</li>
                  <li><TiTick/>Free Cash Withdrawals</li>
                  <li><TiTick/>Phone and Chat Support</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary' disabled='true'>
                  Coming Soon
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;
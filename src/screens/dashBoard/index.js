import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';

const symbols = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const Reel = ({spinValue}) => {
  const [symbol, setSymbol] = useState(
    symbols[Math.floor(Math.random() * symbols.length)],
  );

  useEffect(() => {
    let intervalId;
    if (spinValue) {
      intervalId = setInterval(() => {
        setSymbol(symbols[Math.floor(Math.random() * symbols.length)]);
      }, 30);
    }
    return () => clearInterval(intervalId);
  }, [spinValue]);

  return <Text style={{fontSize: 72, textAlign: 'center'}}>{symbol}</Text>;
};

const Dashboard = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [reels, setReels] = useState([true, true, true]);

  const spinReels = () => {
    setIsSpinning(true);
    setReels([true, true, true]);
    setTimeout(() => {
      setIsSpinning(false);
      setReels([false, false, false]);
    }, 1000);
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={{flexDirection: 'row'}}>
        <Reel spinValue={reels[0]} />
        <Reel spinValue={reels[1]} />
        <Reel spinValue={reels[2]} />
      </View>
      <Button
        title={isSpinning ? 'Spinning...' : 'Spin'}
        onPress={spinReels}
        disabled={isSpinning}
      />
    </View>
  );
};

export default Dashboard;

import './Tab1.css';

import {
  IonContent,
  IonFooter,
  IonHeader,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

import ExploreContainer from '../components/ExploreContainer';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <p>some test content</p>
        <p>some test content</p>
        <p>some test content</p>
        <p>some test content</p>
        <p>some test content</p>
        <p>some test content</p>
        <p>some test content</p>
        <p>some test content</p>
        <p>some test content</p>
        <p>some test content</p>
        <p>some test content</p>
        <p>some test content</p>
        <p>some test content</p>
        <p>some test content</p>
        <p>some test content</p>
        <p>some test content</p>
        <p>some test content</p>
        <p>some test content</p>
        <p>some test content</p>
        <p>some test content</p>
        <p>some test content</p>
        <p>some test content</p>
        <p>some test content</p>
        <p>some test content</p>
        <p>some test content</p>
        <p>some test content</p>
        <p>some test content</p>
        <p>some test content</p>
        <p>some test content</p>
        <p>some test content</p>
        <p>some test content</p>
        <p>some test content</p>
        <p>some test content</p>
        <div
          slot='fixed'
          style={{ position: 'absolute', bottom: 0, width: '100%' }}
        >
          <IonToolbar>
            <IonInput placeholder='footer' />
          </IonToolbar>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

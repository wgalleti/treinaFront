import 'devextreme/dist/css/dx.common.css'
import 'devextreme/dist/css/dx.light.css'
import '@/assets/styles/devexpress.css'
import 'devextreme-intl'
import 'devextreme/dist/js/localization/dx.messages.pt'
import ptMessage from 'devextreme/localization/messages/pt'
import { locale, loadMessages } from 'devextreme/localization'

loadMessages(ptMessage)
locale('pt')

import * as monaco from 'monaco-editor';


import React from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { HashRouter } from 'react-router-dom';

const defaultModelValue = `import React from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { HashRouter } from 'react-router-dom';

/* Уровень Junior */

/*
    После того, как вы верно решите задачи, вы получите QR-код,
    который необходимо показать на стойке Raiffeisen DGTL для получения доступа
    к следующему уровню сложности.
*/

/* Для получения QR-кода необходимо записать в константу userName ваш никнейм */

const userName = '';

/* Задача № 1 */

/* 
    Проценты по депозитам

    Dыберите 2 банка с самыми большими ставками и расположите их по убыванию).
    Ставки должны быть уникальными. Если Уникальных ставок меньше 2,
    то результат должен состоять из одного элемента.

    Например:

    [4, 10, 10, 9]  =>  [10, 9]
    [1, 1, 1]  =>  [1]
    []  =>  []
*/

const twoHighestPersent = arr => {
  // ваш код...
}

/* Задача № 2 */

/*
    Недостающий договор

    В отделе валютного контроля принимают на учет контракты с нерезидентами.
    В период отчетности выяснилось, что клиенты поставили не все контракты на учет.

    Вам дан массив, содержащий номера контрактов (от 0 до 100).
    Найдите номер контракта, которого не хватает в массиве.
*/

const missingContract = nums => {
   // ваш код...
}

/* Задача № 3 */

/*
    Вы разрабатываете решение для кодирования пользовательских обращений в банк.
    
    Ваша задача - заставить программу принимать предложение (без знаков препинания),
    добавлять все слова в список и возвращать предложение в виде строки, которая представляет
    собой позиции слова в списке. Так как банк международный, обращения принимаются
    на английском языке. Слова не чувствительны к регистру.

    Пример:
        “Ask not what your COUNTRY can do for you ASK WHAT YOU CAN DO FOR YOUR country”
        становится “01234567802856734"
*/

const compress = sentence => {
  
}

/* Не изменяйте эту часть кода для корректной работы */

export const GlobalStyle = createGlobalStyle\`
    html, body, #app {
        padding: 0;
        margin: 0;
        height: 100%;
        width: 100%;
        box-sizing: border-box;
    }
\`;

const Button = styled.button\`
    width: 120px;
    height: 40px;
    cursor: pointer;
    color: #2B2D33;
    background-color: #FEE600;
    border: 0;
    border-radius: 8px;
\`;

const Container = styled.div\`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
\`;

const Logo = styled.img\`
    width: 200px;
    height: 100px;
\`;

const App = () => {
    return (
        <HashRouter>
            <GlobalStyle />
            <Container>
                <Logo src="https://www.raiffeisen.ru/common/new/images/logo-raif.svg" />
            </Container >
        </HashRouter>
    );
}

window['exercise'] = {
    task1: twoHighestPersent,
    task2: missingContract,
    task3: compress,
    userName
};

ReactDOM.render(<App />, document.getElementById('app'));`

export const Monaco = new class {

    editor?: monaco.editor.IStandaloneCodeEditor;
    model?: monaco.editor.ITextModel;

    constructor() {
        monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
            noSemanticValidation: true,
            noSyntaxValidation: false
        });

        monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
            jsx: monaco.languages.typescript.JsxEmit.React,
            allowNonTsExtensions: true,
            moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
            module: monaco.languages.typescript.ModuleKind.CommonJS,
            noEmit: true,
            esModuleInterop: true,
        });

        ['react', 'react-dom', 'styled-components', 'history', 'react-router', 'react-router-dom'].forEach(this.loaStaticdDTS);
    }

    loaStaticdDTS = async (libName: string) => {
        const response = await fetch(`/${libName}.d.ts`)
        const dts = await response.text();
        monaco.editor.createModel(dts, 'typescript', monaco.Uri.parse(`file:///node_modules/@types/${libName}/index.d.ts`));
        monaco.languages.typescript.typescriptDefaults.addExtraLib(dts, `file:///node_modules/@types/${libName}/index.d.ts`);
    }

    createEditor = (ref: HTMLDivElement): monaco.editor.IStandaloneCodeEditor | null => {
        if (ref) {
            this.createModel();
            this.editor = monaco.editor.create(ref, {
                theme: "vs-dark",
                automaticLayout: true,
                model: this.model
            }) as monaco.editor.IStandaloneCodeEditor;
            return this.editor;
        }
        return null;
    }

    createModel = () => {
        this.model = this.model ?? monaco.editor.createModel(defaultModelValue, 'typescript', monaco.Uri.parse(`file:///index.tsx`));
        monaco.editor.setModelLanguage(this.model, 'typescript');
    }

    updateModel = (data: string) => {
        this.model?.setValue(data ?? '');
    }

}
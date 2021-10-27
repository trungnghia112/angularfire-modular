import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

interface Scripts {
  name: string;
  src: string;
}

export const ScriptStore: Scripts[] = [
  // {name: 'filepicker', src: 'https://api.filestackapi.com/filestack.js'},
  {name: '', src: ''},
];

@Injectable(
  // {providedIn: 'root'}
)
export class UtilsService {
  head: any;
  private scripts: any = {};

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.head = this.document.getElementsByTagName('head')[0];

    if (ScriptStore.length) {
      ScriptStore.forEach((script: any) => {
        this.scripts[script.name] = {
          loaded: false,
          src: script.src
        };
      });
    }
  }

  /**
   * this.loadStyle('./assets/css/custom.css', 'style-theme', [{key:'media',value:'all'}]);
   */
  loadStyle(styleName: string, styleId: string, options?: { key: string, value: string }[]) {
    return new Promise((resolve, reject) => {
      let themeLink = this.document.getElementById(styleId) as HTMLLinkElement;
      if (themeLink) {
        themeLink.href = styleName;
      } else {
        const style: any = this.document.createElement('link');
        style.id = styleId;
        style.rel = 'stylesheet';
        style.href = `${styleName}`;
        style.onload = resolve;
        if (options) {
          options.map((v: { key: string, value: string }) => {
            style[v.key] = v.value;
          });
        }
        this.head.appendChild(style);
      }
    });
  }

  loadJs(styleName: string, styleId: string) {
    return new Promise((resolve, reject) => {
      let scriptLink = this.document.getElementById(styleId) as HTMLScriptElement;
      if (scriptLink) {
        scriptLink.src = styleName;
      } else {
        const js = this.document.createElement('script');
        js.id = styleId;
        js.src = styleName;
        this.head.appendChild(js);
      }
    });
  }


  /**
   *
   * this.load('filepicker', 'rangeSlider').then(data => {console.log('script loaded ', data)}).catch(error => console.log(error));
   */
  load(...scripts: string[]) {
    var promises: any[] = [];
    scripts.forEach((script) => promises.push(this.loadScript(script)));
    return Promise.all(promises);
  }

  /**
   * this.loadScript('./assets/js/custom.js', [{key:'crossorigin',value:'anonymous'}]);
   */
  loadScript(name: string, options?: { key: string, value: string }[]) {
    return new Promise((resolve, reject) => {
      // resolve if already loaded
      if (this.scripts[name].loaded) {
        resolve({script: name, loaded: true, status: 'Already Loaded'});
      } else {
        // load script
        let script: any = this.document.createElement('script');
        script.type = 'text/javascript';
        script.src = this.scripts[name].src;

        if (options) {
          options.map((v: { key: string, value: string }) => {
            script.setAttribute(v.key, v.value);
          });
        }

        if (script.readyState) {  // IE
          script.onreadystatechange = () => {
            if (script.readyState === 'loaded' || script.readyState === 'complete') {
              script.onreadystatechange = null;
              this.scripts[name].loaded = true;
              resolve({script: name, loaded: true, status: 'Loaded'});
            }
          };
        } else {  // Others
          script.onload = () => {
            this.scripts[name].loaded = true;
            resolve({script: name, loaded: true, status: 'Loaded'});
          };
        }
        script.onerror = (error: any) => resolve({script: name, loaded: false, status: 'Loaded'});
        this.head.appendChild(script);
      }
    });
  }

  loadScriptLazy(scriptData: { name: string, loaded: boolean, src: string }, options?: { key: string, value: string }[]) {
    console.log(scriptData);
    return new Promise((resolve, reject) => {
      // resolve if already loaded
      if (scriptData.loaded) {
        resolve({script: scriptData.name, loaded: true, status: 'Already Loaded'});
      } else {
        // load script
        let script: any = this.document.createElement('script');
        script.type = 'text/javascript';
        script.src = scriptData.src;

        if (options) {
          options.map((v: { key: string, value: string }) => {
            script.setAttribute(v.key, v.value);
          });
        }

        if (script.readyState) {  // IE
          script.onreadystatechange = () => {
            if (script.readyState === 'loaded' || script.readyState === 'complete') {
              script.onreadystatechange = null;
              scriptData.loaded = true;
              resolve({script: scriptData.name, loaded: true, status: 'Loaded'});
            }
          };
        } else {  // Others
          script.onload = () => {
            scriptData.loaded = true;
            resolve({script: scriptData.name, loaded: true, status: 'Loaded'});
          };
        }
        script.onerror = (error: any) => resolve({script: scriptData.name, loaded: false, status: 'Loaded'});
        this.head.appendChild(script);
      }
    });
  }
}

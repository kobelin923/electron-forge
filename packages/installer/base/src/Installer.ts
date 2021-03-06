import { OraImpl } from '@electron-forge/async-ora';

export interface InstallerOptions {
  filePath: string;
  installSpinner: OraImpl;
}

export default abstract class Installer {
  abstract name: string;
  /* tslint:disable variable-name */
  __isElectronForgeInstaller!: boolean;
  /* tslint:enable variable-name */

  constructor() {
    Object.defineProperty(this, '__isElectronForgeInstaller', {
      value: true,
      enumerable: false,
      configurable: false,
    });
  }

  /**
   * Installers must implement this method and install the given filePath
   * when called.  This method must return a promise
   */
  async install(opts: InstallerOptions) {
    throw new Error(`Installer ${this.name} did not implement the install method`);
  }
}

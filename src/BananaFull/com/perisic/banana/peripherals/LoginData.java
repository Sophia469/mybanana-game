package com.perisic.banana.peripherals;

/**
 * Basic class. To do:
 * link against external database.
 * signup mechanism to create account.
 * Encryption
 * Etc.
 * @author Marc Conrad
 */
public class LoginData {
    /**
     * Returns true if passwd matches the username given.
     * @param username
     * @param passwd
     * @return
     */
    boolean checkPassword(String username, String passwd) {
        if( username.equals("SeuUsername") && passwd.equals("SuaSenha")) {
            return true;
        }
        return false;
    }
}

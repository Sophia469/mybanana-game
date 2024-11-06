package com.perisic.banana.peripherals;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class LoginGUI {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Login Authentication");
        frame.setSize(400, 200);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        // Usar GridBagLayout para centralizar
        frame.setLayout(new GridBagLayout());
        GridBagConstraints gbc = new GridBagConstraints();
        gbc.gridx = 0;
        gbc.gridy = 0;
        gbc.anchor = GridBagConstraints.CENTER;

        JPanel panel = new JPanel();
        panel.setBackground(Color.white); // Cor de fundo do painel

        frame.add(panel, gbc);
        placeComponents(panel);

        // Centralizar a janela na tela
        frame.setLocationRelativeTo(null);
        
        frame.setVisible(true);
    }

    private static void placeComponents(JPanel panel) {
        panel.setLayout(new GridBagLayout());
        GridBagConstraints gbc = new GridBagConstraints();

        gbc.insets = new Insets(10, 10, 10, 10);
        gbc.gridx = 0;
        gbc.gridy = 0;
        JLabel userLabel = new JLabel("User:");
        panel.add(userLabel, gbc);

        gbc.gridx = 1;
        JTextField userText = new JTextField(20);
        panel.add(userText, gbc);

        gbc.gridx = 0;
        gbc.gridy = 1;
        JLabel passwordLabel = new JLabel("Password:");
        panel.add(passwordLabel, gbc);

        gbc.gridx = 1;
        JPasswordField passwordText = new JPasswordField(20);
        panel.add(passwordText, gbc);

        gbc.gridx = 1;
        gbc.gridy = 2;
        JButton loginButton = new JButton("Login");
        loginButton.setForeground(Color.WHITE); // Cor do texto do botão
        loginButton.setBackground(Color.DARK_GRAY); // Cor de fundo do botão
        panel.add(loginButton, gbc);

        loginButton.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                String user = userText.getText();
                String password = new String(passwordText.getPassword());

                LoginData loginData = new LoginData();
                if (loginData.checkPassword(user, password)) {
                    JOptionPane.showMessageDialog(null, "Login successful!");
                } else {
                    JOptionPane.showMessageDialog(null, "Login failed.");
                }
            }
        });
    }
}

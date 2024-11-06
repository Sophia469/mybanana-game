package com.perisic.banana.peripherals; 
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.image.BufferedImage;

import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTextArea;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import com.perisic.banana.engine.GameEngine;

public class GameGUI extends JFrame implements ActionListener {

    private static final long serialVersionUID = -107785653906635L;
    private String bananaData; // Variável para armazenar os dados da banana

    @Override
    public void actionPerformed(ActionEvent e) {
        int solution = Integer.parseInt(e.getActionCommand());
        boolean correct = myGame.checkSolution(solution);
        int score = myGame.getScore();
        if (correct) {
            System.out.println("Correct solution entered!");
            currentGame = myGame.nextGame();
            ImageIcon ii = new ImageIcon(currentGame);
            questArea.setIcon(ii);
            infoArea.setText("Good! Score: " + score);
        } else {
            System.out.println("Not Correct");
            infoArea.setText("Oops. Try again! Score: " + score);
        }
    }

    JLabel questArea = null;
    GameEngine myGame = null;
    BufferedImage currentGame = null;
    JTextArea infoArea = null;

    private void initGame(String player) {
        setSize(690, 500);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setTitle("What is the missing value?");
        JPanel panel = new JPanel();

        myGame = new GameEngine(player);
        currentGame = myGame.nextGame();

        infoArea = new JTextArea(1, 40);
        infoArea.setEditable(false);
        infoArea.setText("What is the value of the tomato? Score: 0");

        JScrollPane infoPane = new JScrollPane(infoArea);
        panel.add(infoPane);

        ImageIcon ii = new ImageIcon(currentGame);
        questArea = new JLabel(ii);
        questArea.setSize(330, 600);

        JScrollPane questPane = new JScrollPane(questArea);
        panel.add(questPane);

        for (int i = 0; i < 10; i++) {
            JButton btn = new JButton(String.valueOf(i));
            panel.add(btn);
            btn.addActionListener(this);
        }

        getContentPane().add(panel);
        panel.repaint();

        // Buscar os dados da API e armazenar em bananaData
        fetchBananaInfo();
    }

    private void fetchBananaInfo() {
        try {
            String data = getBananaData("json", "no");
            if (data != null) {
                bananaData = data;
                infoArea.setText("Banana Data: " + data); // Atualize o JTextArea com os dados da banana
                System.out.println("Banana Data: " + data);
            } else {
                System.err.println("Failed to fetch banana data");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    

    private String getBananaData(String format, String base64) {
        
        // Substitua isso pelo código real de chamada da API
        return "Sample Banana Data";
    }

    public GameGUI() {
        super();
        initGame(null);
    }

    public GameGUI(String player) {
        super();
        initGame(player);
    }

    public static void main(String[] args) {
        GameGUI myGUI = new GameGUI();
        myGUI.setVisible(true);
    }
}

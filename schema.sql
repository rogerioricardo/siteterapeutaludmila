-- Script para criar o banco de dados e a tabela de contatos no cPanel (phpMyAdmin)

-- Criação do banco de dados (ajuste o nome conforme criado no cPanel)
-- CREATE DATABASE IF NOT EXISTS ludmila_terapeuta;
-- USE ludmila_terapeuta;

-- Tabela para armazenar as mensagens enviadas pelo site
CREATE TABLE IF NOT EXISTS contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    phone VARCHAR(50),
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela para armazenar solicitações de agendamento
CREATE TABLE IF NOT EXISTS appointments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    patient_name VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    preferred_date DATE,
    preferred_time TIME,
    status ENUM('pending', 'confirmed', 'cancelled') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

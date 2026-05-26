CREATE TABLE official_numbers (
    id SERIAL PRIMARY KEY,
    phone_number VARCHAR(20) UNIQUE NOT NULL,
    channel_name VARCHAR(100) NOT NULL,
    description TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE fraud_reports (
    id SERIAL PRIMARY KEY,
    reporter_name VARCHAR(100) NOT NULL,
    reporter_email VARCHAR(150) NOT NULL,
    reported_phone VARCHAR(20) NOT NULL,
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO official_numbers (phone_number, channel_name, description)
VALUES
    ('40020022', 'Central Bradesco', 'Central oficial de atendimento Bradesco'),
    ('08005700022', 'SAC Bradesco', 'Servico de atendimento ao consumidor Bradesco')
ON CONFLICT (phone_number) DO NOTHING;

INSERT INTO fraud_reports (reporter_name, reporter_email, reported_phone, message)
VALUES
    ('Cliente Teste', 'cliente.teste@email.com', '11999999999', 'Numero ficticio usado para demonstrar tentativa de golpe');
